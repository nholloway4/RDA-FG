module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
              
        sass: {
            dist: {
              options: {
                style: 'expanded'
              },
              files: [
                {

                  expand: true,
                  cwd: 'css/sass',
                  src: ["*.scss"],
                  dest: "css",
                  ext: ".css"

                }
              ]
            }
        },
            watch: {
            sass: {
              files: ["**/*.scss"],
              tasks: ["sass"],
              options: {
                livereload: true
              }
            }            
        },
        concat: {   
            concatjs: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/global.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }       
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        }        

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};