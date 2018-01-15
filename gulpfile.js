const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const webserver = require('gulp-webserver');

gulp.task('texteditorjs', (cb) => {
  webpackConfig.output.filename = 'text-editor.js';
  return gulp.src('./src/js/components/text-editor/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./build/js'));
});

gulp.task('layouteditorjs', (cb) => {
  webpackConfig.output.filename = 'layout-editor.js';
  return gulp.src('./src/js/components/layout-editor/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./build/js'));
});

gulp.task('texteditorsass', (cb) => {
  gulp.src('./src/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
    cb();
});

gulp.task('buildjs', (cb) => {
  return gulp.src([
    './build/js/text-editor.js',
    './build/js/layout-editor.js'
	])
		.pipe(concat('retamaFlatEditor.js'))
		//.pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('reload', (cb) => {
  livereload.reload();
  cb();
});

gulp.task('serve', () => {
  return gulp.src('public')
    .pipe(webserver({
      port: 3000,
      livereload: true
    }));
});

gulp.task('watch', gulp.series('serve', () => {
	livereload.listen();
  gulp.watch(['./src/js/components/text-editor/**/*.js'], gulp.series('texteditorjs', 'buildjs','reload'));
  gulp.watch(['./src/js/components/layout-editor/**/*.js'], gulp.series('layouteditorjs', 'buildjs','reload'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('texteditorsass'));
  gulp.watch('./public/index.html', gulp.series('reload'));
}));

