# Qwen Code - Project Context

## Project Overview

This is a Next.js 15.5.4 application bootstrapped with `create-next-app` using Turbopack. The project is called "stack1" and features an animated particle background with interactive 3D cubes. The application appears to be designed for a gaming or stake-based platform with the title "Stake, Stack!" and includes interactive elements like particle effects, 3D cubes that respond to user movement, and animated text components.

### Key Technologies
- Next.js 15.5.4 (with Turbopack)
- React 19.1.0
- TypeScript
- Tailwind CSS (v4)
- GSAP (GreenSock Animation Platform) for animations
- OGL for WebGL functionality
- Lucide React for icons

### Architecture
- `/src/app` - Contains the main application pages using the Next.js App Router
- `/src/components` - Custom React components for animations and UI elements (particles, 3D cubes, animated text)
- `/src/lib` - Utility functions (currently just a class name utility function)

## Building and Running

### Development
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the development server using Next.js with Turbopack enabled.

### Production Build
```bash
npm run build
```

This will generate an optimized production build using Next.js with Turbopack.

### Running in Production
```bash
npm run start
```

This will start the production server.

## Development Conventions

### File Structure
- Components are placed in `/src/components` and follow the React component pattern
- Pages are structured in the `/src/app` directory following the Next.js 13+ App Router convention
- Global styles are in `/src/app/globals.css` with Tailwind CSS integration
- Utility functions are in `/src/lib/utils.ts`

### Styling
- Uses Tailwind CSS v4 with custom theme definitions
- Dark mode is enabled by default with custom color definitions
- CSS variables for theming with oklch color values
- Custom animation classes via tw-animate-css

### Animations and Interactivity
- GSAP is used extensively for smooth animations
- WebGL effects through OGL library
- Interactive elements respond to pointer and touch events
- Particle systems and 3D effects for visual appeal

### Components
Key custom components include:
- `Particles.tsx` - Animated particle background
- `Cubes.tsx` - Interactive 3D cube grid that responds to mouse/touch
- `SplitText.tsx` - Animated text splitting effect
- `TargetCursor.tsx` - Custom cursor implementation
- `TrueFocus.tsx` - Animated text with border and glow effects

The application appears to be implementing a gaming or stake-based interface with high visual fidelity and interactive elements.

## Qwen Added Memories
- stack
