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
      '3-isEven': {
        args: [
          'exercises/3/isEven.js',
        ],
      },
      '3-countBs': {
        args: [
          'exercises/3/countBs.js',
        ],
      },
      '3-countChar': {
        args: [
          'exercises/3/countChar.js',
        ],
      },

      // 4
      '4-sumRange': {
        args: [
          'exercises/4/sumRange.js',
        ],
      },
      '4-reverseArray': {
        args: [
          'exercises/4/reverseArray.js',
        ],
      },
      '4-reverseArrayInPlace': {
        args: [
          'exercises/4/reverseArrayInPlace.js',
        ],
      },
      '4-arrayToList': {
        args: [
          'exercises/4/arrayToList.js',
        ],
      },
      '4-listToArray': {
        args: [
          'exercises/4/listToArray.js',
        ],
      },
      '4-deepEqual': {
        args: [
          'exercises/4/deepEqual.js',
        ],
      },

      // 5
      '5-flatten': {
        args: [
          'exercises/5/flatten.js',
        ],
      },
      '5-motherChild': {
        args: [
          'exercises/5/motherChild.js',
        ],
      },

    },
  });

  // Default tasks
  grunt.registerTask('default', ['eslint', 'run']);
};
