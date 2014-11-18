/* global require */

var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    jshint    = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    header    = require('gulp-header');

var vendorJsPaths = [
  'bower_components/react/react-with-addons.min.js'
];

var jsSrc = ['src/javascript/components/**/*', 'src/javascript/*'];
var cssSrc = ['src/stylesheet/*'];
var imgSrc = ['src/images/**/*'];

var generateHeader = function() {
    return "/* @flow */\n";
};

gulp.task('vendor', function() {
  gulp.src(vendorJsPaths)
    .pipe(gulp.dest('web/vendor/javascript'));
  return true;
});

gulp.task('hint', function() {
  return gulp.src(jsSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function() {
  gulp.src(cssSrc)
      .pipe(concat('main.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('web/stylesheet/'));
  return gulp.src(jsSrc)
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('web/javascript/'));
});

gulp.task('minify-dev', function() {
  gulp.src(cssSrc)
      .pipe(concat('main.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('web/stylesheet/'));
  return gulp.src(jsSrc)
    .pipe(concat('application.js'))
    .pipe(header(generateHeader()))
    .pipe(gulp.dest('web/javascript/'));
});

gulp.task('static-images', function() {
  return gulp.src(imgSrc)
    .pipe(gulp.dest('web/images'));
});

gulp.task('build', ['hint', 'minify', 'vendor', 'static-images'], function() {});

gulp.task('build-dev', ['hint', 'minify-dev', 'vendor', 'static-images'], function() {});

gulp.task('dev', ['build-dev'], function() {
  gulp.watch(['src/**/*'], function(evt) { return gulp.run('build-dev'); });
});

gulp.task('default', ['build'], function() {
});
