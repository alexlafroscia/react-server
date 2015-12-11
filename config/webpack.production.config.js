'use strict';

var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, '..', 'src');
var buildPath = path.resolve(__dirname, '..', 'dist/assets');

module.exports = {
  target: 'web',
  cache: false,
  debug: true,
  devtool: 'eval-cheap-module-souce-map',
  entry: [
    path.join(srcPath, 'module.js')
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['typecheck']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
