require('./gulp/dev');
require('./gulp/scripts');
require('./gulp/styles');
require('./gulp/build');

const gulp = require('gulp');

gulp.task('default', () => {
  gulp.start('dev'); // gulp dev
});
