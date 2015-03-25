'use strict';

module.exports = function(grunt) {

    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch:{
            js: {
                files:['angularjs/**/*.js','angularjs/**/*.html','!angularjs/ngmodules/**','!angularjs/vendor/**'],
                tasks:['jshint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint:{
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [ 'angularjs/**/*.js','!angularjs/vendor/**','!angularjs/ngmodules/**' ],
                //ignores: ['angularjs/vendor/**','angularjs/ngmodules/**']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

};