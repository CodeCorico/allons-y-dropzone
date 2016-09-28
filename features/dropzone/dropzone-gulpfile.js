'use strict';

module.exports = function($gulp) {

  $gulp.task('dropzone', function(done) {

    $gulp
      .src([
        'node_modules/dropzone/dist/dropzone.css',
        'node_modules/dropzone/dist/min/dropzone.min.css',
        'node_modules/dropzone/dist/dropzone.js',
        'node_modules/dropzone/dist/min/dropzone.min.js'
      ])
      .pipe($gulp.dist('vendor'))
      .on('end', done);

  });

  return 'dropzone';
};
