const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
  'default',
  gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'svg:dev', 'svgSymbol:dev', 'fonts:dev', 'files:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
  )
);

gulp.task(
  'docs',
  gulp.series(
    'clean:docs',
    gulp.parallel(
      'html:docs',
      'sass:docs',
      'images:docs',
      'svg:docs',
      'svgSymbol:docs',
      'fonts:dev',
      'files:docs',
      'js:docs',
      'purgecss:docs'
    ),
    gulp.parallel('server:docs')
  )
);
