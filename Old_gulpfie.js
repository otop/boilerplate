var path = require('path');
var gulp = require('gulp');
var run = require('gulp-run');
var istanbul = require('gulp-istanbul');
// We'll use mocha in this example, but any test framework will work
var mocha = require('gulp-mocha');

gulp.task('pre-test', function () {
  return gulp.src(['routes/**/*.js'])
    // Covering files
    .pipe(istanbul({includeUntested: true}))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['test/*.js'])
    .pipe(mocha())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports({
                  dir: './coverage',
                  reporters: [ 'clover' ],
                  reportOpts: { dir: './coverage' }
              }))
    // Enforce a coverage of at least 90%
    //.pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});