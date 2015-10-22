module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        phpdocumentor: {
            dist: {
                options: {
                    ignore: 'node_modules'
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'resources/assets/sass',
                    cssDir: 'public/assets/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'resources/assets/sass',
                    cssDir: 'public/assets/css',
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> scripts.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    report: 'gzip'
                },
                files: {
                    'public/assets/backend/js/main.min.js' : [
                        'public/libraries/jquery/dist/jquery.min.js',
                        'public/libraries/bootstrap/dist/js/bootstrap.min.js',
                        'public/libraries/bootstrap-switch/dist/js/bootstrap-switch.min.js',
                        'resources/assets/backend/js/script.min.js'
                    ]
                }
            },
            dev: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> scripts.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    beautify: true,
                    compress: false,
                    mangle: false
                },
                files: {
                    'public/assets/backend/js/main.js' : [
                        'public/libraries/jquery/dist/jquery.js',
                        'public/libraries/bootstrap/dist/js/bootstrap.js',
                        'public/libraries/bootstrap-switch/dist/js/bootstrap-switch.js',
                        'resources/assets/backend/js/script.js'
                    ]
                }
            }
        },
        jshint: {
            files: [
                'resources/assets/backend/js/*.js',
                'resources/assets/frontend/js/*.js'
            ],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            css: {
                files: 'resources/assets/sass/*.sass',
                tasks: ['compass']
            },
            scripts: {
                files: ['resources/assets/backend/js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-phpdocumentor');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'jshint',
        'uglify:dev',
        'uglify:dist',
        'compass:dev',
        'compass:dist',
    ]);

    grunt.registerTask('docs', [
        'phpdocumentor:dist'
    ]);
};