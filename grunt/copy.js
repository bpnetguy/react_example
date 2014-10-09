var path = require('path');
var webpack = require('webpack');
module.exports = {
  html: {
    files: [
      //{expand: true, src: ['source/**/*.html'], dest: 'dist/'},
      {src: ['source/index.html'], dest: 'dist/index.html'},
    ]
  },
};
