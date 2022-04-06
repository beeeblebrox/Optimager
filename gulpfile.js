const sourceFolder = 'src';
const resultFolder = 'dist';

import pkg from 'gulp'
const { gulp, series, parallel, src, dest, watch } = pkg

import imageResize from 'gulp-image-resize'
import imagemin    from 'gulp-imagemin'
import del         from 'del'

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
export { optimization, clearResultFolder }
export let run = optimization
export let clear = clearResultFolder