const path = require('path');

module.exports = {
  dev: {
    publicPath: '/',
    port: 8000,
    assertRoot: path.resolve(__dirname, '../dist'),
    env: {
      NODE_ENV: '"development"'
    }
  },
  build: {
    publicPath: '/',
    env: {
      NODE_ENV: '"production"'
    }
  }
};
