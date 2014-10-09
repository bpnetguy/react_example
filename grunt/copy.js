var path = require('path');
var webpack = require('webpack');
module.exports = {
  build: {
    files: [
      {expand: true, cwd: "source/", src: ['**'], dest: 'build/'},
    ]
  },
  dist: { 
    files: [
      {src: ['source/index.html'], dest: 'dist/index.html'},
    ]
  }
};
