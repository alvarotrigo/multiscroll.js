/*-------------------------------------------------------------------
  Required plugins
-------------------------------------------------------------------*/
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  gulp.src('./jquery.multiscroll.js')
    .pipe(uglify({
        preserveComments: 'license'
      }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

// Watcher
gulp.task('default', ['js']);