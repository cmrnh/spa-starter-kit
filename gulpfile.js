var gulp = require('gulp');
var del = require('del');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

gulp.task('default', ['clean', 'copy']);

gulp.task('clean', function(cb) {
  del(['build/*'], cb);
});

gulp.task('copy', function() {
  return gulp.src('client/www/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('browserify', function() {
  return gulp.src('client/index.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build', function(cb) {
  runSequence('clean', 'browserify', 'copy', cb);
});