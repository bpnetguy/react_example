var path = require('path');
var webpack = require('webpack');
module.exports = {
  build: {
    devtool:"source-map",
    entry: {
        app: './build/index.js',
    },
    output: {
        path: path.join(__dirname,'../dist'),
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
