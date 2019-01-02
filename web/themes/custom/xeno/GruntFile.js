module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: ['js/src/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          nospawn: true,
          livereload: 45729
        }
      },
      options: {
        livereload: true,
      },
    },

    sass: {
      dist: {
        files: {
          'css/styles.css': 'scss/styles.scss'
        }
      }
    },

    jshint: {
      myFiles: ['js/src/*.js']
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['../../../libraries/popper.js/dist/umd/popper.js', '../../../libraries/bootstrap/dist/js/bootstrap.js', 'js/src/*.js'],
        dest: 'js/scripts.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'js/scripts.min.js': ['js/scripts.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['watch']);
};
