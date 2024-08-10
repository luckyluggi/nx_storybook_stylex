const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
const  stylexPlugin = require('@stylexjs/rollup-plugin');
// import stylexPlugin from '@stylexjs/rollup-plugin';

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/design-system',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      stylexPlugin({
        // Required. File path for the generated CSS file.
        fileName: './.build/stylex.css',
        // default: false
        dev: false,
        // prefix for all generated classNames
        classNamePrefix: 'x',
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: 'commonJS',
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      }),
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
