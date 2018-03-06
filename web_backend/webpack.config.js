var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: [
    './src/index',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  }
};
