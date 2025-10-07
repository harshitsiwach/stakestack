## Error Type
Runtime ReferenceError

## Error Message
particleColors is not defined


    at createCubeGeometry (src/components/Particles.tsx:113:21)
    at Particles.useEffect (src/components/Particles.tsx:274:22)
    at Home (src/app/page.tsx:13:7)

## Code Frame
  111 |     
  112 |     // Use vibrant, pixel-style colors from the specified palette or default
> 113 |     const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;
      |                     ^
  114 |     const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
  115 |     colors.set(col, i * 3);
  116 |   }

Next.js version: 15.5.4 (Turbopack)
