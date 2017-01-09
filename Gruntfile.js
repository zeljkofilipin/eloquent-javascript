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
      // 2
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
      // 3
      '3-min': {
        args: [
          'exercises/3/min.js',
        ],
      },
      '3-is-even': {
        args: [
          'exercises/3/is_even.js',
        ],
      },
      '3-countBs': {
        args: [
          'exercises/3/countBs.js',
        ],
      },
    },

  });

  // Default tasks
  grunt.registerTask('default', ['eslint', 'run']);
};
