const
  gulp = require('gulp'),
  Config = require('../../gulpfile.config')
  ;
// browserSync = require('browser-sync'),
// superstatic = require('superstatic');

const config = new Config();

gulp.task('watch-src', function () {
  return gulp.watch([config.tsSourceFiles], gulp.series('compile-ts'));
});

gulp.task('watch-assets', function () {
  return gulp.watch([`${config.sourcePath}/assets`],
    gulp.series('clean-assets', 'copy-assets')
  );
});

gulp.task('watch', gulp.parallel('watch-assets', 'watch-src'), function (done) {
  done();
});

const changed = require('gulp-cached');
gulp.watch("app/scripts/**/*.ts").on("change", function () {
  var compilationResults = gulp.src("app/scripts/**/*.ts")
    .pipe(changed("./deploy/output"))
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  compilationResults.dts.pipe(gulp.dest("./deploy/output"));
  compilationResults.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./deploy/output"))
    .pipe(connect.reload());
});

// var tsWatchProject = ts.createProject('./tsconfig.watch.json',
//   {
//     typescript: require('typescript')
//   });

// gulp.task('typescript-watch',
//   function () {
//     gulp.watch('./**/*.ts')
//       .on('change',
//         function (file) {
//           gulp.src([file.path])
//             .pipe(plumber())
//             .pipe(debug({
//               title: 'compiling '
//             }))
//             .pipe(tsWatchProject())
//             .pipe(gulp.dest('./'))
//             .pipe(print(function (filepath) {
//               return 'compiled ' + filepath;
//             }));
//         });
//   });