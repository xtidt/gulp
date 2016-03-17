// 载入外挂
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

//sass
gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// 样式
gulp.task('styles', function() {  
  return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function() {  
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// 图片
gulp.task('images', function() {  
  return gulp.src('img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    // .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {  
  // return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
  return gulp.src(['dist/**/*'], {read: false})
    .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {  
    gulp.start('styles', 'scripts', 'images');
});

// 看手
gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // 看守所有.js档
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // 看守所有图片档
  gulp.watch('src/images/**/*', ['images']);

  // 建立即时重整伺服器
  var server = livereload();

  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  gulp.watch(['dist/**']).on('change', function(file) {
    // server.changed(file.path);
    console.log(file.path);
  });

});