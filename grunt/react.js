module.exports = {
  jsx: {
    files: [{
      expand: true,
      cwd: './source',
      src: ['**/*.jsx','**/*.js'],
      dest: './build',
      ext: '.js'
    }]
  }
};
