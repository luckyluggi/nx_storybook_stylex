# How did i set this up
1. i ran `npx create-nx-workspace` using the following settings:
   - Where would you like to create your workspace? · nx_storybook_stylex
   - Which stack do you want to use? · react
   - What framework would you like to use? · none
   - Integrated monorepo, or standalone project? · integrated
   - Application name · shop
   - Which bundler would you like to use? · rspack
   - Test runner to use for end to end (E2E) tests · cypress
   - Default stylesheet format · css
   - Which CI provider would you like to use? · skip
   - Would you like remote caching to make your build faster? · skip
2. i ran `nx generate library` to init a design-system
3. i ran `nx g move --project design-system libs/design-system` for a better folder structure
4. i ran `nx add @nx/storybook` to add the storybook package to nx
5. i ran `nx g @nx/storybook:configuration design-system` to setup storybook in the design-system project uisng these settings:
   - Do you want to set up Storybook interaction tests? (Y/n) · true
   - Choose the Storybook framework that you need to use. · @storybook/react-vite
6. i added a button component and story in `libs\design-system\src\lib\myButton`
7. i ran `nx storybook design-system` to run storybook and it worked
8. i installed tho following packages:
    - `npm install --save @stylexjs/stylex`
    - `npm install --save-dev @stylexjs/babel-plugin`
    - `npm install --save-dev @stylexjs/rollup-plugin`
9. i added the file `libs\design-system\babel.config.js`
10. i added updated the rollup.config.js like described here: https://stylexjs.com/docs/learn/installation/
    1.  i had to replace `import stylexPlugin from '@stylexjs/rollup-plugin';` with `const  stylexPlugin = require('@stylexjs/rollup-plugin');`


# Problem
Now i get the following error:
```
 NX   Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it. See errors below.

Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it.
  An error occurred while processing files for the @nx/rollup/plugin plugin.
    - libs/design-system/rollup.config.js: stylexPlugin is not a function
      TypeError: stylexPlugin is not a function
          at Object.<anonymous> (c:\dev\_try\nx_stylex\nx_storybook_stylex\libs\design-system\rollup.config.js:20:7)
          at Module._compile (node:internal/modules/cjs/loader:1373:14)
          at Module._extensions..js (node:internal/modules/cjs/loader:1432:10)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at newLoader (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at Object.newLoader [as .js] (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\pirates\lib\index.js:121:7)
          at Module.load (node:internal/modules/cjs/loader:1215:32)
          at Module._load (node:internal/modules/cjs/loader:1031:12)
          at Function.c._load (node:electron/js2c/node_init:2:13801)
          at cjsLoader (node:internal/modules/esm/translators:352:17)
          at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:297:7)
          at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
          at ModuleLoader.import (node:internal/modules/esm/loader:316:24)
          at getConfigFileExport (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\rollup\dist\shared\loadConfigFile.js:471:17)
          at loadConfigFile (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\rollup\dist\shared\loadConfigFile.js:430:59)
          at buildRollupTarget (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\@nx\rollup\src\plugins\plugin.js:70:27)
          at exports.createNodes (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\@nx\rollup\src\plugins\plugin.js:41:32)
          at c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\utils.js:47:27
          at async Promise.all (index 0)
          at createNodesFromFiles (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\utils.js:45:5)
          at LoadedNxPlugin.createNodes.<computed> (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\internal-api.js:45:28)
          at async Promise.all (index 3)
          at processFilesAndCreateAndSerializeProjectGraph (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\daemon\server\project-graph-incremental-recomputation.js:148:43)
          at Timeout._onTimeout (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\daemon\server\project-graph-incremental-recomputation.js:86:13)
```

I also tried renaming `rollup.config.js` to `rollup.config.mjs` and switching from `require` to `import x from ...` but then i get the following error:
``` NX   Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it. See errors below.

Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it.
  An error occurred while processing files for the @nx/rollup/plugin plugin.
    - libs/design-system/rollup.config.mjs: Node tried to load your configuration as an ES module even though it is likely CommonJS. To resolve this, change the extension of your configuration to ".cjs" or pass the "--bundleConfigAsCjs" flag.

  Original error: __dirname is not defined in ES module scope
      ReferenceError: __dirname is not defined in ES module scope
          at file:///c:/dev/_try/nx_stylex/nx_storybook_stylex/libs/design-system/rollup.config.mjs?1723286059205:32:20
          at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
          at ModuleLoader.import (node:internal/modules/esm/loader:316:24)
          at getConfigFileExport (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\rollup\dist\shared\loadConfigFile.js:471:17)
          at loadConfigFile (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\rollup\dist\shared\loadConfigFile.js:430:59)
          at buildRollupTarget (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\@nx\rollup\src\plugins\plugin.js:70:27)
          at exports.createNodes (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\@nx\rollup\src\plugins\plugin.js:41:32)
          at c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\utils.js:47:27
          at async Promise.all (index 0)
          at createNodesFromFiles (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\utils.js:45:5)
          at LoadedNxPlugin.createNodes.<computed> (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\project-graph\plugins\internal-api.js:45:28)
          at async Promise.all (index 3)
          at processFilesAndCreateAndSerializeProjectGraph (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\daemon\server\project-graph-incremental-recomputation.js:148:43)
          at Timeout._onTimeout (c:\dev\_try\nx_stylex\nx_storybook_stylex\node_modules\nx\src\daemon\server\project-graph-incremental-recomputation.js:86:13)
```
