module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'package.json', 'spec/**/*.js', 'src/**/*.js'],
      options : {
        globals : {
          jQuery: true,
          console: true,
          module: true,
          document: true,
        }
      }
    },
    watch : {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
}
