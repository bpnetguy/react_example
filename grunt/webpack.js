var path = require('path');

module.exports = {
  dev: {
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
    progress: true,
    keepalive: true
  }
};
