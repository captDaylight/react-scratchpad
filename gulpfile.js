var gulp = require('gulp');
var react = require('gulp-react');
var connect = require('gulp-connect');

gulp.task('react', function () {
    return gulp.src('template.jsx')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server();
});
 
gulp.task('default', ['react','connect']);