module.exports = function(grunt) {

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            //compile the less files into a css file.
            less: {
                compile: {
                    options: {
                        yuicompress: true
                    },
                    files: {
                        'css/menu.css' : 'menu.less'
                    }
                }
            }

            /* minify compiled (less -> css) file. */
            ,cssmin: {
            target: {
                files: {
                    'dist/menu.min.css': ['css/menu.css']
                }
            }
        }

            ,watch: {
            css: {
                files: '*.less',
                tasks: ['less', 'cssmin'],
                options: {
                    livereload: true
                }
            }
        }

        });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};