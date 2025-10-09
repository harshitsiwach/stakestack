"use client";
import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

const defaultColors: string[] = ['#ffffff', '#ffffff', '#ffffff'];

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

// Define a single cube geometry that will be replicated at each particle position
// For a more pixelated appearance, we can make the cubes more distinct and vibrant
const createCubeGeometry = (gl: any, particleCount: number, particleSpread: number, particleBaseSize: number, particleColors: string[] | undefined) => {
  // Define cube vertices with sharper, more pixel-like appearance
  const cubeVertices = new Float32Array([
    // Front face
    -0.5, -0.5,  0.5,
     0.5, -0.5,  0.5,
     0.5,  0.5,  0.5,
    -0.5,  0.5,  0.5,
    // Back face
    -0.5, -0.5, -0.5,
    -0.5,  0.5, -0.5,
     0.5,  0.5, -0.5,
     0.5, -0.5, -0.5,
    // Top face
    -0.5,  0.5, -0.5,
    -0.5,  0.5,  0.5,
     0.5,  0.5,  0.5,
     0.5,  0.5, -0.5,
    // Bottom face
    -0.5, -0.5, -0.5,
     0.5, -0.5, -0.5,
     0.5, -0.5,  0.5,
    -0.5, -0.5,  0.5,
    // Right face
     0.5, -0.5, -0.5,
     0.5,  0.5, -0.5,
     0.5,  0.5,  0.5,
     0.5, -0.5,  0.5,
    // Left face
    -0.5, -0.5, -0.5,
    -0.5, -0.5,  0.5,
    -0.5,  0.5,  0.5,
    -0.5,  0.5, -0.5
  ]);

  const cubeIndices = new Uint16Array([
    // Front face
    0, 1, 2, 0, 2, 3,
    // Back face
    4, 5, 6, 4, 6, 7,
    // Top face
    8, 9, 10, 8, 10, 11,
    // Bottom face
    12, 13, 14, 12, 14, 15,
    // Right face
    16, 17, 18, 16, 18, 19,
    // Left face
    20, 21, 22, 20, 22, 23
  ]);

  // Generate particle positions
  const positions = new Float32Array(particleCount * 3);
  const randoms = new Float32Array(particleCount * 4);
  const colors = new Float32Array(particleCount * 3);
  const totalVertices = particleCount * 24;
  const finalPositions = new Float32Array(totalVertices * 3);
  const finalRandoms = new Float32Array(totalVertices * 4);
  const finalColors = new Float32Array(totalVertices * 3);
  const finalCubeVertices = new Float32Array(totalVertices * 3);

  // Create particle instances data
  for (let i = 0; i < particleCount; i++) {
    let x: number, y: number, z: number, len: number;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      len = x * x + y * y + z * z;
    } while (len > 1 || len === 0);
    const r = Math.cbrt(Math.random());
    positions.set([x * r * particleSpread, y * r * particleSpread, z * r * particleSpread], i * 3);
    randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
    
    // Use vibrant, pixel-style colors from the specified palette or default
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;
    const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
    colors.set(col, i * 3);
  }

  // Now replicate the data for each cube's vertices
  for (let i = 0; i < particleCount; i++) {
    const particlePos = [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]];
    const particleRandom = [randoms[i * 4], randoms[i * 4 + 1], randoms[i * 4 + 2], randoms[i * 4 + 3]];
    const particleColor = [colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]];
    
    for (let j = 0; j < 24; j++) { // 24 vertices per cube
      const vertexIdx = i * 24 + j;
      
      // Cube vertex positions relative to cube center - adjust size for more pixelated look
      finalCubeVertices[vertexIdx * 3] = cubeVertices[j * 3] * particleBaseSize * 0.0001; // Made cubes even smaller
      finalCubeVertices[vertexIdx * 3 + 1] = cubeVertices[j * 3 + 1] * particleBaseSize * 0.0001;
      finalCubeVertices[vertexIdx * 3 + 2] = cubeVertices[j * 3 + 2] * particleBaseSize * 0.0001;
      
      // Final world position (cube vertex + particle position)
      finalPositions[vertexIdx * 3] = finalCubeVertices[vertexIdx * 3] + particlePos[0];
      finalPositions[vertexIdx * 3 + 1] = finalCubeVertices[vertexIdx * 3 + 1] + particlePos[1];
      finalPositions[vertexIdx * 3 + 2] = finalCubeVertices[vertexIdx * 3 + 2] + particlePos[2];
      
      // Random values for this particle
      finalRandoms[vertexIdx * 4] = particleRandom[0];
      finalRandoms[vertexIdx * 4 + 1] = particleRandom[1];
      finalRandoms[vertexIdx * 4 + 2] = particleRandom[2];
      finalRandoms[vertexIdx * 4 + 3] = particleRandom[3];
      
      // Color for this particle
      finalColors[vertexIdx * 3] = particleColor[0];
      finalColors[vertexIdx * 3 + 1] = particleColor[1];
      finalColors[vertexIdx * 3 + 2] = particleColor[2];
    }
  }

  // Create indices for all cubes
  const allIndices: number[] = [];
  for (let i = 0; i < particleCount; i++) {
    const baseIndex = i * 24;
    for (const index of cubeIndices) {
      allIndices.push(baseIndex + index);
    }
  }

  const geometry = new Geometry(gl, {
    position: { size: 3, data: finalPositions },
    random: { size: 4, data: finalRandoms },
    color: { size: 3, data: finalColors },
    cubeVertex: { size: 3, data: finalCubeVertices }, // Cube shape vertices
    index: { data: new Uint16Array(allIndices) }
  });

  return geometry;
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  attribute vec3 cubeVertex; // The actual cube vertex relative to its center
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    // Use the cube vertex as offset from the original position
    vec3 pos = position + cubeVertex;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime * 0.02; // Slowed down the movement significantly
    // Animate based on the particle's random values
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    gl_Position = projectionMatrix * viewMatrix * mPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    // More pixelated appearance with solid colors and subtle pulsing effect
    vec3 color = vColor;
    // Add some subtle animation to make cubes feel alive but still pixel-like
    float pulse = 0.1 * sin(uTime * 2.0 + vRandom.x * 10.0);
    color += pulse;
    
    // Clamp color values to maintain pixelated look
    color = clamp(color, 0.0, 1.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1, // Not used in cube version but kept for compatibility
  cameraDistance = 20,
  disableRotation = false,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: true, alpha: true }); // Enable depth for 3D cubes
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener('resize', resize, false);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    const geometry = createCubeGeometry(gl, particleCount, particleSpread, particleBaseSize, particleColors);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize }
      },
      transparent: true,
      depthTest: true // Enable depth testing for proper 3D cube rendering
    });

    const particles = new Mesh(gl, { mode: gl.TRIANGLES, geometry, program });

    let animationFrameId: number;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      if (moveParticlesOnHover) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation
  ]);

  return <div ref={containerRef} className={`relative w-full h-full ${className}`} />;
};

export default Particles;
