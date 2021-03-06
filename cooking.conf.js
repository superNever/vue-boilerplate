var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './examples/demo.js']
  },
  dist: './dist',
  template: './index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: './',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  static: true,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'lint', 'less', 'autoprefixer']
});

module.exports = cooking.resolve();
