var gulp = require("gulp");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var sourcemaps = require("gulp-sourcemaps");
var eslint = require("gulp-eslint");
var serve = require('gulp-serve');

var paths = {
  main: "./src/js/main.js",
  publicDir: "./public",
  jsFiles: ["./src/js/**/*.js"],
  htmlFiles: ["./src/index.html"]
};

gulp.task("js", function() {
  gulp.src(paths.main)
    .pipe(browserify({
      transform: ["babelify"],
      debug: true
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.publicDir));
});

gulp.task("html", function() {
  gulp.src(paths.htmlFiles)
    .pipe(gulp.dest(paths.publicDir));
});

gulp.task("watch", function() {
  gulp.watch(paths.jsFiles, ["js"]);
  gulp.watch(paths.htmlFiles, ["html"]);
});

gulp.task("eslint", function() {
  return gulp.src(paths.jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("serve", serve({
  root: "./public",
  port: 8080
}));

gulp.task("build", ["eslint", "html", "js"]);
gulp.task("dev", ["build", "watch", "serve"]);
gulp.task("default", ["build"]);
