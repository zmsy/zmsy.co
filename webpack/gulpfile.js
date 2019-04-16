'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var clean_css = require('gulp-clean-css');
var source_maps = require('gulp-sourcemaps');
var purify = require('gulp-purify-css');
var rename = require('gulp-rename');

// Process bulma variables
gulp.task('bulma-default', function() {
    return gulp.src('./node_modules/bulma/bulma.sass')
        .pipe(source_maps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(clean_css())
        .pipe(source_maps.write('.'))
        .pipe(gulp.dest('../assets/css/'));
});

// Custom bulma version.
gulp.task('bulma-custom', function() {
    return gulp.src('./src/bulma.scss')
        .pipe(source_maps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(clean_css())
        .pipe(source_maps.write('.'))
        .pipe(gulp.dest('../assets/css/'));
});


// Process main scss.
gulp.task('main-css', function() {
    return gulp.src('./src/index.scss')
        .pipe(rename('main.min.css'))
        .pipe(source_maps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(clean_css())
        .pipe(source_maps.write('.'))
        .pipe(gulp.dest('../assets/css/'));
});


// Process main javascript.
gulp.task('main-js', function() {
    return gulp.src('./src/main.js')
        .pipe(rename('main.min.js'))
        .pipe(source_maps.init())
        .pipe(uglify())
        .pipe(source_maps.write('.'))
        .pipe(gulp.dest('../assets/js/'));
});


// watch main css
gulp.task('watch-main', function () {
    gulp.watch('./src/main.scss', ['main-css']);
});

// Process all
gulp.task('default', ['bulma-custom', 'main-css', 'main-js'])
