const sourceFolder = 'src';
const resultFolder = 'dist';

const { series, parallel, src, dest, watch } = require('gulp');
const imageResize   = require('gulp-image-resize');
const imagemin      = require('gulp-imagemin');
const del           = require('del');

/* Optimization */
function optimization() {
  return src(`${sourceFolder}/**/*`)
  .pipe(imageResize({
    width : 800,
    height : 0,
    crop : false,
    upscale : false
  }))
  .pipe(imagemin())
  .pipe(dest(resultFolder))
}

/* Clearing */
function clearResultFolder() {
  return del(resultFolder, { force: true })
}

exports.run   = optimization;
exports.clear = clearResultFolder;