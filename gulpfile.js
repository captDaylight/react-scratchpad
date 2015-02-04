var gulp = require('gulp'),
	connect = require('gulp-connect'),
	source = require('vinyl-source-stream'),
	reactify = require('reactify'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	buffer = require('vinyl-buffer'),
	browserify = require('browserify');

gulp.task('browserify', ['clean'], function () {
  browserify('./src/js/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch('./src/js/app.jsx', ['browserify']);
});
 
gulp.task('default', ['watch', 'browserify', 'connect']);