'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge2');

function sass(src, dest) {
  return gulp.src(src)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
}

gulp.task('styles', function() {
  return sass('app/main.scss', '.tmp/app')
    .pipe($.debug({title: 'styles:'}));
});

gulp.task('styles:test', function() {
  return sass('test/unit/main.scss', '.tmp/test/unit')
    .pipe($.debug({title: 'styles:test: '}));
});

function tsc(src, dest, out) {
  var tsResult = gulp.src(src)
    .pipe($.sourcemaps.init())
    .pipe($.typescript({
      noImplicitAny: true,
      target: 'ES5',
      declarationFiles: true,
      out: out,
      noExternalResolve: false
    }));

  var js = tsResult.js
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(dest));

  var dts = tsResult.dts
    .pipe(gulp.dest(dest));

  return merge([js, dts]);
}

gulp.task('scripts', function() {
  return tsc('app/_all.ts', '.tmp/app', 'all.js')
    .pipe($.debug({title: 'scripts:'}));
});

gulp.task('scripts:test', function() {
  return tsc('test/unit/_all.ts', '.tmp/test/unit', 'all.js')
    .pipe($.debug({title: 'scripts:test:'}));
});
