var path = require('path');
var gulp = require('gulp');
var run = require('gulp-run');
var webpack = require('webpack');
var gutil = require("gulp-util");
var gls = require('gulp-live-server');
var env = require('gulp-env');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var babel = require('babel-core/register');

var buildJSX = function (callback) {
    var webpackConfig = require('./webpack.config');

    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            chunks: false,
            colors: true
        }));
        callback();
    });
};

var watchServer = function(server){
    gulp.watch(['./app.js', ['./routes/**/*.js']], function () {
        server.start.apply(server);
    });
};

var startServer = function(serverFilePath){
    var server = gls(['--harmony', serverFilePath]);
    server.start();
    watchServer(server);
};

var startMainServer = function () {
    startServer('./server.js');
};


gulp.task('pre-test', function () {
    return gulp.src(['lib/**/*.js'])
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'],  function() {
     gulp.src(['./test/example.js'])
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}))
        // Covering files
        .pipe(istanbul.writeReports())
        // Enforce a coverage of at least 90%
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('lint', function() {
    return gulp.src("./client")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('webpack:build-jsx', buildJSX);

gulp.task('server-start', startMainServer);

gulp.task('default', ['webpack:build-jsx', 'test', 'lint', 'server-start']);


