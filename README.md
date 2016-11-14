# build environment

* ts -> es5 (commonjs)
* ts -> es5 (bundle)

bundled js file is exposed to global.

specified module (has `__prefix__`) will not be bundled and resolve module with global.

execute `http-server` in root and open `*/test/browser` to test in browser.

# log

```
./run.sh all
```

```
🍀  /Users/pnlybubbles/Devs/dts-test/host
yarn install v0.16.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 23.85s.
yarn run v0.16.1
$ tsc --target es5 --module commonjs --outDir lib/ --sourceMap --declaration src/index.ts
✨  Done in 1.74s.
yarn run v0.16.1
$ webpack
Hash: 1aab75aff76a4708e98a
Version: webpack 1.13.3
Time: 86ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  2.47 kB       0  [emitted]  main
bundle.js.map   2.8 kB       0  [emitted]  main
   [0] ./lib/index.js 235 bytes {0} [built]
   [1] ./lib/mod.js 276 bytes {0} [built]
   [2] ./lib/main.js 230 bytes {0} [built]
✨  Done in 0.51s.
🍀  /Users/pnlybubbles/Devs/dts-test/dep
yarn install v0.16.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 15.00s.
yarn run v0.16.1
$ tsc --target es5 --module commonjs --outDir lib/ --sourceMap --declaration src/index.ts
✨  Done in 2.15s.
yarn run v0.16.1
$ webpack
Hash: 7d0962b9a5ed59831533
Version: webpack 1.13.3
Time: 99ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  3.65 kB       0  [emitted]  main
bundle.js.map  4.39 kB       0  [emitted]  main
   [0] ./lib/index.js 335 bytes {0} [built]
   [1] ./lib/dep-mod.js 294 bytes {0} [built]
   [2] ./lib/dep-ex-mod.js 757 bytes {0} [built]
   [4] ./lib/main.js 340 bytes {0} [built]
    + 1 hidden modules
✨  Done in 0.50s.
🍀  /Users/pnlybubbles/Devs/dts-test/dep-dep
yarn install v0.16.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 31.92s.
yarn run v0.16.1
$ tsc --target es5 --module commonjs --outDir lib/ --sourceMap --declaration src/index.ts
✨  Done in 2.34s.
yarn run v0.16.1
$ webpack
Hash: f036cc58524cad1e72c1
Version: webpack 1.13.3
Time: 105ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  3.17 kB       0  [emitted]  main
bundle.js.map  3.72 kB       0  [emitted]  main
   [0] ./lib/index.js 276 bytes {0} [built]
   [1] ./lib/dep-dep-ex-mod.js 785 bytes {0} [built]
   [3] ./lib/main.js 263 bytes {0} [built]
    + 1 hidden modules
✨  Done in 0.53s.
./run.sh all  56.63s user 31.16s system 107% cpu 1:21.90 total
```

# test

```
./run.sh test
```

```
🍀  /Users/pnlybubbles/Devs/dts-test/host
yarn test v0.16.1
$ ls test/*.ts | xargs -n 1 ts-node && ls test/*.js | xargs -n 1 babel-node
test-ts test
test-ts-host test
host test
host
test-js-host test
host test
host
✨  Done in 3.00s.
🍀  /Users/pnlybubbles/Devs/dts-test/dep
yarn test v0.16.1
$ ls test/*.ts | xargs -n 1 ts-node && ls test/*.js | xargs -n 1 babel-node
dep test
dep-ex-host test
dep
dep-ex-host
dep test
dep-ex-host test
dep
dep-ex-host
✨  Done in 1.88s.
🍀  /Users/pnlybubbles/Devs/dts-test/dep-dep
yarn test v0.16.1
$ ls test/*.ts | xargs -n 1 ts-node && ls test/*.js | xargs -n 1 babel-node
dep-dep-ex-dep-ex-host test
dep-dep-ex-dep-ex-host
dep-dep-ex-dep-ex-host test
dep-dep-ex-dep-ex-host
✨  Done in 1.80s.
```
