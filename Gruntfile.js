module.exports = function(grunt) {
 
 

  // Configure Grunt 
  grunt.initConfig({


    concat: {
      js: {
        src: ['app/js/1.js', 'app/js/2.js'],
        dest: 'app/js/build/script.js',

      },
      css: {
        src: ['app/css/style.css', 'app/css/_top.css'],
        dest: 'app/css/build/style.css',
      },
    },

    watch: {
      options:{livereload: true},
      js: {
        files: ['app/js/**/*.js'],
        tasks: ['concat:js'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['app/css/**/*.css'],
        tasks: ['concat:css'],
        options: {
          spawn: false,
        },
      },
    },


    express: {
        all:{
          options:{
            port:3000,
            hostname: 'localhost',
            bases: ['.'],
            livereload: true
          }
        }
    },

    open: {
      dev: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>',
        app: 'chrome'
      }
    }

   



  });
  

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['concat' , 'watch']);
  grunt.registerTask('server', [ 'express' ,'open', 'watch']);
   
};