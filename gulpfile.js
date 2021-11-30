'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


// Clean output directory
gulp.task('clean', function () {
  return del(['docs']);
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./css/style.css')
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({}))
      // Minify the file
      .pipe(csso({
        restructure: false
      }))
      // Output
      .pipe(gulp.dest('./docs/css'))
  });

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./js/**/*.js')
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./docs/js'))
  });

// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src(['*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./docs'));
  });

// Gulp task to minify images
gulp.task('images', function () {
    return gulp.src('images/**/*')
     .pipe(imagemin())
     .pipe(gulp.dest('docs/images'));
});

gulp.task('copy-plugins', function() {
  return gulp.src('plugins/**/*')
   .pipe(gulp.dest('docs/plugins/'));
});

gulp.task('copySEOfiles', function() {
  return gulp.src(['robots.txt', 'sitemap.xml', 'CNAME'])
   .pipe(gulp.dest('docs/'));
});

gulp.task('default', gulp.series('clean', 'copySEOfiles', 'copy-plugins', 'images', 'pages', 'scripts', 'styles'))