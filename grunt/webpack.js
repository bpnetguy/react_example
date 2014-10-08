var path = require('path');
var webpack = require('webpack');
module.exports = {
  build: {
    entry: {
        app: './source/index.js',
    },
    output: {
        path: path.join(__dirname,'../build'),
        filename: '[name]-bundle.js'
    },
    stats: {
        // Configure the console output
        colors: true,
        modules: true,
        reasons: true
    },
    plugins:[
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ],
    progress: true,
    keepalive: true
  },
  dev: {
    watch: true,
    keepalive: true,
    failOnError: false
  }
};
