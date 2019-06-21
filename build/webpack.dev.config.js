const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const { HotModuleReplacementPlugin } = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // 热替换
    new HotModuleReplacementPlugin(),
    // 对webpack运行出错进行整理，提高开发体验
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
      quiet: true
    })
  ]
});
