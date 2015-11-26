var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var webpack = require('webpack-stream')

var paths = {
  scripts: 'src/**/*.js',
  styles: ''
}

gulp.task('build', function () {
  return gulp.src(paths.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app.js'))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
    .pipe($.connect.reload())
})

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build'])
})

gulp.task('connect', function() {
  $.connect.server({
    root: 'public',
    livereload: true
  })
})

gulp.task('default', ['build', 'watch', 'connect'])
