'use strict';

var webpack = require('webpack'),
  path = require('path'),
  srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  target: 'web',
  cache: false,
  debug: true,
  devtool: 'eval-cheap-module-souce-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(srcPath, 'module.js')
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: '/',
    publicPath: '/assets/',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
