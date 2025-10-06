## Error Type
Build Error

## Error Message
Ecmascript file had an error

## Build Output
./src/components/Particles.tsx:1:17
Ecmascript file had an error
> 1 | import React, { useEffect, useRef } from 'react';
    |                 ^^^^^^^^^
  2 | import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';
  3 |
  4 | interface ParticlesProps {

You're importing a component that needs `useEffect`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive.

 Learn more: https://nextjs.org/docs/app/api-reference/directives/use-client

Import trace:
  Server Component:
    ./src/components/Particles.tsx
    ./src/app/page.tsx

Next.js version: 15.5.4 (Turbopack)
