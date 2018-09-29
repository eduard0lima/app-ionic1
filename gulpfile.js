import { task, src, dest, watch } from 'gulp';
import sass, { logError } from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

var paths = {
  sass: ['./scss/**/*.scss']
};

task('default', ['sass']);

task('sass', function(done) {
  src('./scss/ionic.app.scss')A
    .pipe(sass())
    .on('error', logError)
    .pipe(dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./www/css/'))
    .on('end', done);
});

task('watch', ['sass'], function() {
  watch(paths.sass, ['sass']);
});
