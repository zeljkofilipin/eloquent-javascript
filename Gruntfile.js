module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    // Configure ESLint task
    eslint: {
      all: [
        '**/*.js',
        '!node_modules/**',
      ],
    },

    // Configure a run task
    run: {
      chess: {
        args: [
          'exercises/2/chess.js',
        ],
      },
      fizbuzz: {
        args: [
          'exercises/2/fizbuzz.js',
        ],
      },
      triangle: {
        args: [
          'exercises/2/triangle.js',
        ],
      },
    },

  });

  // Default tasks
  grunt.registerTask('default', ['eslint', 'run']);
};
