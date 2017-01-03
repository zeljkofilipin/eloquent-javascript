module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  // Project configuration
  grunt.initConfig({
    // Configure ESLint task
    eslint: {
      all: [
        '**/*.js',
        '!node_modules/**'
      ]
    }
  })

  // Default tasks
  grunt.registerTask('default', ['eslint'])
}
