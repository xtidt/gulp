'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

// var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function() {
    return gulp.src(['dist'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('style', function(){
    console.log('------style');
})

gulp.task('script', function(){
    console.log('------script');
})

gulp.task('images', function(){
    console.log('------images');
})

gulp.task('watch', function(){
    gulp.watch('src/style/**/*.scss', ['style']);
    gulp.watch('src/script/**/*.js', ['script']);
    gulp.watch('src/images/**/*', ['images']);
})

