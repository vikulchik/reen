'use strict';

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('compass', function () {
    gulp.src('scss/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'scss',
            sourcemap: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('autpr', function () {
    return gulp.src('css/main.css')
        .pipe(autoprefixer(['> 5%', 'last 5 versions', 'IE 9']))
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['compass']);

});

gulp.task('webserver', function () {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


gulp.task('default', [
    'watch',
    'compass',
    'webserver'
]);

