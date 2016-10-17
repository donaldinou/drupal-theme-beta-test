module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            options: {
                includePaths: ['bower_components/bootstrap-sass/assets/stylesheets'],
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.min.css': ['sass/styles.scss']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', [
        'sass'
    ]);
};
