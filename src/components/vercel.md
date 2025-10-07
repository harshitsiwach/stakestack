13:04:54.682 Running build in Washington, D.C., USA (East) – iad1
13:04:54.682 Build machine configuration: 2 cores, 8 GB
13:04:54.696 Cloning github.com/harshitsiwach/stakestack (Branch: main, Commit: 34c112f)
13:04:54.967 Cloning completed: 270.000ms
13:04:56.034 Restored build cache from previous deployment (5JRwMk8vbyfoQNCjT7KT9ap28tTJ)
13:04:56.351 Running "vercel build"
13:04:56.727 Vercel CLI 48.2.0
13:04:57.025 Installing dependencies...
13:04:59.126 
13:04:59.127 added 12 packages in 2s
13:04:59.127 
13:04:59.127 17 packages are looking for funding
13:04:59.128   run `npm fund` for details
13:04:59.162 Detected Next.js version: 15.5.4
13:04:59.165 Running "npm run build"
13:04:59.269 
13:04:59.270 > stack1@0.1.0 build
13:04:59.270 > next build --turbopack
13:04:59.270 
13:05:00.348    ▲ Next.js 15.5.4 (Turbopack)
13:05:00.349 
13:05:00.417    Creating an optimized production build ...
13:05:11.164  ✓ Finished writing to disk in 12ms
13:05:11.195  ✓ Compiled successfully in 10.1s
13:05:11.204    Linting and checking validity of types ...
13:05:15.559 Failed to compile.
13:05:15.559 
13:05:15.560 ./src/components/Shuffle.tsx:360:37
13:05:15.560 Type error: Cannot find namespace 'JSX'.
13:05:15.560 
13:05:15.560 [0m [90m 358 |[39m
13:05:15.561  [90m 359 |[39m   [36mconst[39m classes [33m=[39m [32m`${baseTw} ${ready ? 'visible' : 'invisible'} ${className}`[39m[33m.[39mtrim()[33m;[39m
13:05:15.561 [31m[1m>[22m[39m[90m 360 |[39m   [36mconst[39m [33mTag[39m [33m=[39m (tag [33m||[39m [32m'p'[39m) [36mas[39m keyof [33mJSX[39m[33m.[39m[33mIntrinsicElements[39m[33m;[39m
13:05:15.561  [90m     |[39m                                     [31m[1m^[22m[39m
13:05:15.561  [90m 361 |[39m
13:05:15.561  [90m 362 |[39m   [36mreturn[39m [33mReact[39m[33m.[39mcreateElement([33mTag[39m[33m,[39m { ref[33m:[39m ref [36mas[39m any[33m,[39m className[33m:[39m classes[33m,[39m style[33m:[39m commonStyle }[33m,[39m text)[33m;[39m
13:05:15.561  [90m 363 |[39m }[33m;[39m[0m
13:05:15.583 Next.js build worker exited with code: 1 and signal: null
13:05:15.605 Error: Command "npm run build" exited with 1