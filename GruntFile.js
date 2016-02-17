module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["app/less"],
                    compress: true
                },
                files: {
                    "app/app.css": "app/less/app.less"
                }
            },
            production: {
                options: {
                    paths: ["app/less"],
                    compress: true
                },
                files: {
                    "../css/styles.css": "app/less/styles.less"
                }
            }
        },
        watch: {
            files: ['app/less/**/*.less', 'app/js/**/*.js', 'app/!js/combined.js', 'app/!js/combined_min.js'],
            //tasks: ['concat', 'uglify', 'less']
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat:js', 'uglify:js']);
};