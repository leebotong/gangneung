var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

function scssCompile(scssUrl, outputStyle, outputFileName) {
  gulp.src(scssUrl, {allowEmpty:true}) // scss파일이 위치한 경로로 변경
    .pipe(sass({
      outputStyle: `${outputStyle}`
    }).on('error', sass.logError))
    .pipe(concat(outputFileName)) // 최종 output 파일명
    .pipe(autoprefixer())
    // .pipe(minifycss())
    .pipe(gulp.dest('./css/')); // 최종 output 파일을 생성할 경로로 변경
}

// gulp.task('common', async function () {
//   return scssCompile('./VW_showroom/responsive/css/common.scss', 'compact', 'common.css');
// });
gulp.task('content', async function () {
  return scssCompile('./css/scss/content.scss', 'nested', 'content.css');
});

// 파일 변경 감지
gulp.task('watch', async function () {
  gulp.watch(['./css/*.scss', './css/*/*.scss'], gulp.series(['content'])); // scss파일이 위치한 경로로 변경
});

//gulp를 실행하면 default 로 minifycss, watch task를 실행
gulp.task('default', gulp.series(['content','watch']));