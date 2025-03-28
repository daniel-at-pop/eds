const path = require('path');

module.exports = {
  plugins: [
    require('@csstools/postcss-sass'),
    require('postcss-import')(),
    // require('postcss-url')({
    //   url: 'copy', // or 'rebase'
    //   basePath: path.resolve('styles/src/shidoka-design-system'),
    //   assetsPath: path.resolve('fonts'), // where to copy the fonts
    //   useHash: true, // optional: adds a hash to avoid cache issues
    // }),
    // require('postcss-url')({
    //   url: 'copy', // or 'rebase'
    //   basePath: path.resolve('node_modules/@kyndryl-design-system/shidoka-foundation/css'),
    //   assetsPath: path.resolve('fonts'), // where to copy the fonts
    //   useHash: true, // optional: adds a hash to avoid cache issues
    // }),
  ],
};
