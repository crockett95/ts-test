
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      typescript: {
        files: ['src/**/*.ts', '!src/**/*.d.ts'],
        tasks: ['tslint:source', 'ts:source', 'ts:declarations', 'clean:ts']
      }
    },

    ts: {
      options: {
          comments: true,
          declaration: true,
          target: 'es5',
          module: 'amd'
      },
      source: {
        src: ['src/**/*.ts', '!src/**/*.d.ts'],
        outDir: 'js',
        options: {
          declaration: false
        }
      },
      declarations: {
        src: ['src/**/*.ts', '!src/**/*.d.ts']
      },
      tests: {
        src: ['tests/**/*.ts', '!tests/**/*.d.ts']
      }
    },

    tslint: {
      options: {
        configuration: grunt.file.readJSON('tslint.json')
      },
      source: {
        files: {
          src: ['src/**/*.ts', '!src/**/*.d.ts']
        }
      },
      tests:  {
        files: {
          src: ['tests/**/*.ts', '!tests/**/*.d.ts']
        }
      }
    },

    clean: {
      ts: ['src/**/*.js{,.map}'],
      js: ['js']
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          base: ['./example', '.'],
          keepalive: true
        }
      }
    },

    sass: {
      options: {
        loadPath: 'bower_components'
      },
      server: {
        files: [{
          expand: true,
          cwd: 'example/scss',
          src: ['*.{scss,sass}'],
          dest: 'example/css',
          ext: '.css'
        }]
      }
    },
  });

  grunt.registerTask('default', ['clean:js', 'tslint', 'ts', 'clean:ts', 'watch']);
};
