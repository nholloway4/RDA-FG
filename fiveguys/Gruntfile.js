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
        autoprefixer: {
            dist: {
              files: [
                {

                  expand: true,
                  cwd: 'css/sass',
                  src: ["*.scss"]
                }
              ]
            }
        },
            watch: {
            sass: {
              files: ['build/global.css'],
              tasks: ['autoprefixer'],                
              options: {
                livereload: true
              }
            }            
        },
        pleeease: {
            custom: {
              options: {
                autoprefixer: {'browsers': ['last 4 versions']},
                minifier: false
                
              },
              files: {
                'css/global.css': 'css/global.css'
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
    grunt.loadNpmTasks('grunt-autoprefixer'); 
    grunt.loadNpmTasks('grunt-pleeease');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'pleeease', 'concat', 'uglify']);

};