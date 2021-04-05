/// <binding ProjectOpened='sass, sass-watch' />
const { task, src, dest, parallel, series } = require('gulp');

sass = require("gulp-sass"),
  cssnano = require('gulp-cssnano'),
  noop = require("gulp-noop"),
  header = require("gulp-header"),
  cssBase64 = require("gulp-css-base64"),
  zip = require("gulp-zip"),
  rename = require("gulp-rename"),
  merge = require("gulp-merge"),
  pack = require('./package.json');


function cssTask(minimize) {
  let headerNotice = `/* Blazon flags ` + pack.version + ` (` + pack.repository.url + `). Licensed under ` + pack.license + `. */\n`;
  return src('./scss/*.scss')
    .pipe(sass())
    .pipe(
      cssBase64({
        extensionsAllowed: ['.png'],
        maxWeightResource: 500
      })
    )
    .pipe(minimize ? cssnano() : noop())
    .pipe(minimize ? rename({ suffix: '.min' }) : noop())
    .pipe(header(headerNotice))
    .pipe(dest('css'));
}

function css() {
  return cssTask(false);
}

function cssmin() {
  return cssTask(true);
}

function spritesPipe(size) {
  return src(['./flags/' + size + '/ru/sprites.png']).pipe(rename(file => { file.dirname = 'flags/' + size + '/ru/' + file.dirname; }));
}

function imagesPipe(size) {
  return src(['./flags/' + size + '/ru/*.png', '!./flags/' + size + '/ru/sprites.png']).pipe(rename(file => { file.dirname = 'flags/' + size + '/ru/' + file.dirname; }));
}

function svgImagesPipe() {
  return src(['./flags/svg/ru/*.svg']).pipe(rename(file => { file.dirname = 'flags/svg/ru/' + file.dirname; }));
}

function cssPipe(filename) {
  return src(['./css/' + filename + '.css', './css/' + filename + '.min.css']).pipe(rename(file => { file.dirname = 'css/' + file.dirname; }));
}

function blazon_flags_ru_bundle() {
  return merge(cssPipe('blazon-flags-ru'), spritesPipe('xs'), spritesPipe('sm'), spritesPipe('md'), spritesPipe('lg'), imagesPipe('xl'), svgImagesPipe(), '')
    .pipe(zip('blazon-flags-ru-bundle.zip')).pipe(dest('build/'));
}

function blazon_flags_ru_png() {
  return merge(cssPipe('blazon-flags-ru-png'), spritesPipe('xs'), spritesPipe('sm'), spritesPipe('md'), spritesPipe('lg'), imagesPipe('xl'), '')
    .pipe(zip('blazon-flags-ru-png.zip')).pipe(dest('build/'));
}

function blazon_flags_ru_svg() {
  return merge(cssPipe('blazon-flags-ru-svg'), svgImagesPipe(), '')
    .pipe(zip('blazon-flags-ru-svg.zip')).pipe(dest('build/'));
}

function blazon_flags_ru_xs() {
  return merge(cssPipe('blazon-flags-ru-xs'), '')
    .pipe(zip('blazon-flags-ru-xs.zip')).pipe(dest('build/'));
}

function clean(cb) {
  cb();
}

task('clean', clean);
task('css', parallel(css, cssmin));
task('flags_ru_bundle', blazon_flags_ru_bundle);
task('flags_ru_svg', blazon_flags_ru_svg);
task('flags_ru_png', blazon_flags_ru_png);
task('flags_ru_xs', blazon_flags_ru_xs);
task('zip', parallel('flags_ru_bundle', 'flags_ru_svg', 'flags_ru_png', 'flags_ru_xs'));
task('build', series('clean', 'css', 'zip'));
