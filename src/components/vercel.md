13:01:37.380 Running build in Washington, D.C., USA (East) – iad1
13:01:37.385 Build machine configuration: 2 cores, 8 GB
13:01:37.422 Cloning github.com/harshitsiwach/stakestack (Branch: main, Commit: cf890b8)
13:01:38.239 Cloning completed: 817.000ms
13:01:39.594 Restored build cache from previous deployment (5JRwMk8vbyfoQNCjT7KT9ap28tTJ)
13:01:39.977 Running "vercel build"
13:01:40.390 Vercel CLI 48.2.0
13:01:41.179 Installing dependencies...
13:01:46.143 
13:01:46.143 added 12 packages in 5s
13:01:46.144 
13:01:46.144 17 packages are looking for funding
13:01:46.144   run `npm fund` for details
13:01:46.181 Detected Next.js version: 15.5.4
13:01:46.184 Running "npm run build"
13:01:46.296 
13:01:46.296 > stack1@0.1.0 build
13:01:46.296 > next build --turbopack
13:01:46.296 
13:01:47.468    ▲ Next.js 15.5.4 (Turbopack)
13:01:47.469 
13:01:47.542    Creating an optimized production build ...
13:01:52.797 Found 1 warning while optimizing generated CSS:
13:01:52.797 
13:01:52.798 [2m│   initial-value: 0;[22m
13:01:52.798 [2m│ }[22m
13:01:52.798 [2m│[22m @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
13:01:52.798 [2m┆[22m        [33m[2m^--[22m @import rules must precede all rules aside from @charset and @layer statements[39m
13:01:52.798 [2m┆[22m
13:01:52.798 [2m│ :root {[22m
13:01:52.798 [2m│   --radius: 0.625rem;[22m
13:01:52.799 
13:01:59.203  ✓ Finished writing to disk in 13ms
13:01:59.242  ✓ Compiled successfully in 11.0s
13:01:59.245    Linting and checking validity of types ...
13:02:03.829 Failed to compile.
13:02:03.829 
13:02:03.830 ./src/app/page.tsx:15:9
13:02:03.830 Type error: Type '{ className: string; quantity: number; ease: number; color: string; refresh: true; }' is not assignable to type 'IntrinsicAttributes & ParticlesProps'.
13:02:03.830   Property 'quantity' does not exist on type 'IntrinsicAttributes & ParticlesProps'.
13:02:03.830 
13:02:03.830 [0m [90m 13 |[39m       [33m<[39m[33mParticles[39m
13:02:03.830  [90m 14 |[39m         className[33m=[39m[32m"absolute inset-0 z-0"[39m
13:02:03.831 [31m[1m>[22m[39m[90m 15 |[39m         quantity[33m=[39m{[35m500[39m}
13:02:03.831  [90m    |[39m         [31m[1m^[22m[39m
13:02:03.831  [90m 16 |[39m         ease[33m=[39m{[35m80[39m}
13:02:03.831  [90m 17 |[39m         color[33m=[39m{[32m"#ffffff"[39m}
13:02:03.831  [90m 18 |[39m         refresh[0m
13:02:03.850 Next.js build worker exited with code: 1 and signal: null
13:02:03.872 Error: Command "npm run build" exited with 1