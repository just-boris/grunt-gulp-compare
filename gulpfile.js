var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var less = require('gulp-less');

gulp.task('js', function() {
    var basedir = 'bower_components/chosen/coffee/';
    return gulp.src([basedir+'lib/select-parser.coffee', basedir+'lib/abstract-chosen.coffee', basedir+'chosen.jquery.coffee'])
        .pipe(coffee())
        .pipe(concat('chosen.jquery.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest/'))
});

gulp.task('css', function() {
    return gulp.src('bower_components/bootstrap/less/bootstrap.less')
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['css', 'js']);
