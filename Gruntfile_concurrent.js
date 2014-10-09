module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-concurrent');

    var chosenDir = 'bower_components/chosen/coffee/';
    grunt.initConfig({
        coffee: {
            compile: {
                src: [chosenDir+'lib/select-parser.coffee', chosenDir+'lib/abstract-chosen.coffee', chosenDir+'chosen.jquery.coffee'],
                dest: 'dest/chosen.jquery.js'
            }
        },
        uglify: {
            compile: {
                src: 'dest/chosen.jquery.js',
                dest: 'dest/chosen.jquery.min.js'
            }
        },
        less: {
            compile: {
                src: 'bower_components/bootstrap/less/bootstrap.less',
                dest: 'dest/bootstrap.css'
            }
        },
        csso: {
            compile: {
                src: 'dest/bootstrap.css',
                dest: 'dest/bootstrap.min.css'
            }
        },
        concurrent: {
            all: ['js', 'css']
        }
    });


    grunt.registerTask('js', ['coffee', 'uglify']);
    grunt.registerTask('css', ['less', 'csso']);

    grunt.registerTask('default', ['concurrent']);
};
