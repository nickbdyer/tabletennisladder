module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    ignore_warning: {
      options: {
          '-W030': true
          },
    },
    files: ['Gruntfile.js', 'package.json', 'spec/**/*.js', 'src/**/*.js', 'test/**/*.js'],
      options : {
        globals : {
          jQuery: true,
          console: true,
          module: true,
          document: true,
        }
      }
    },
    jasmine_node: {
      options: {
        forceExit: true,
        all: ['spec/']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false
        },
        src: ['test/players/models.js']
      }
     },
    mocha_casperjs: {
      options: {
      }, 
      files: {
        src: ['test/homepage_features.js'] 
      }
    },
    watch : {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    express: {
      options:{},
      dev: {
        options: {
          script: './server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['express', 'mochaTest']);
};
