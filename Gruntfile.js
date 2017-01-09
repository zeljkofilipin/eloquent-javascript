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
      '2-triangle': {
        args: [
          'exercises/2/triangle.js',
        ],
      },
      '2-fizbuzz': {
        args: [
          'exercises/2/fizbuzz.js',
        ],
      },
      '2-chess': {
        args: [
          'exercises/2/chess.js',
        ],
      },
    },

  });

  // Default tasks
  grunt.registerTask('default', ['eslint', 'run']);
};
