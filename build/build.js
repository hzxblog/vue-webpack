process.env.NODE_ENV = '"production"';

const webpack = require('webpack');
const webpackProConfig = require('./webpack.pro.config');
const chalk = require('chalk');

webpack(webpackProConfig, (err, stats) => {
  if (err) throw err;

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  console.log(chalk.cyan('  Build complete.\n'));
});
