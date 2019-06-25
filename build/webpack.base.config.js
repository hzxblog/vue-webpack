const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    publicPath: config.dev.publicPath,
    path: config.dev.assertRoot
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      "@": path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.png|svg|jpe?g|gif/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[hash].[ext]',
            }
          }
        ]
      }
    ]
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [
    // vue文件解析
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
