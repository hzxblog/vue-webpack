const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js',
    publicPath: config.build.publicPath,
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 分离css
    new MiniCssExtractPlugin({
      filename: 'css/[hash].css',
    })
  ]
});
