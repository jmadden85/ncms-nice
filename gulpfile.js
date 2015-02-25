var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var lint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src(['./*.js', './public/modules/**/*/js'])
    .pipe(lint());
});

gulp.task('develop', function () {
  nodemon({
    script: "server.js",
    ext: "html js"
  }).on("change", ['lint'])
    .on("restart", function () {
      console.log("restarted");
    })
});