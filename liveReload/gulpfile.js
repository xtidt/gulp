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

gulp.task('sass', function() {
    gulp.src('dist/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('live', function () {    // 这里的watch，是自定义的，写成live或者别的也行
    var server = livereload();
    gulp.watch(['dist/**']).on('change', function(file) {
        livereload.listen();
        console.log(file.path);
        // livereload.changed(file.path);
        // livereload.reload(file.path);
    });
});