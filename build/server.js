process.env.NODE_ENV = '"development"';

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.dev.config');
const config = require('./config');
const chalk = require('chalk');
const port = config.dev.port;
const url = require('url');

const options = {
  contentBase: config.dev.assertRoot,
  hot: true,
  port: port,
  quiet: true,
  clientLogLevel: 'trace'
};

WebpackDevServer.addDevServerEntrypoints(webpackDevConfig, options);
const compiler = webpack(webpackDevConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
  console.log(`dev server listening on port ${port}`);
  console.log();
  console.log(`  App running at:`);
  console.log(`  - Local:   ${chalk.cyan(url.format({
    protocol: 'http',
    hostname: 'localhost',
    port,
    pathname: '/'
  }))}`);
});
