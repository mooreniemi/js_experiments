var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  flow = require('gulp-flowtype');

  gulp.task('test', function() {
    return gulp.src('spec/*.js')
    .pipe(jasmine());
  });

  gulp.task('prop', function() {
    return gulp.src('spec/propertiesTest.js')
    .pipe(jasmine());
  });

  gulp.task('mop', function() {
    return gulp.src('spec/mopTest.js')
    .pipe(jasmine());
  });

  gulp.task('imgui', function() {
    return gulp.src('spec/imguiTest.js')
    .pipe(jasmine());
  });

  gulp.task('crdts', function() {
    return gulp.src('spec/crdtsTest.js')
    .pipe(jasmine());
  });

  gulp.task('typecheck', function() {
    return gulp.src('./*.js')
    .pipe(flow({
      all: false,
      weak: false,
      killFlow: false,
      beep: true,
      abort: false
    }));
  });
