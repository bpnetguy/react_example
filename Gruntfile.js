module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
        build: ['build'],
        dist: ['dist']
    }
  });

  grunt.config( 'webpack', require('./grunt/webpack.js') );
  grunt.config( 'react', require('./grunt/react.js') );
  grunt.config( 'watch', require('./grunt/watch.js') );
  grunt.config( 'copy', require('./grunt/copy.js') );


  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['react', "copy:build", "webpack:build"]);

};
