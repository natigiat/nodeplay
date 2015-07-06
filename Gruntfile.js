//http://rhumaric.com/2013/05/reloading-magic-with-grunt-and-livereload/
//read
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
 
    // grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        app: 'chrome',
        path: 'http://localhost:<%= connect.all.options.port%>'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('server',[
    // Open before connect because connect uses keepalive at the moment
    // so anything after connect wouldn't run
    'open', 
    'connect'
  ]);
};