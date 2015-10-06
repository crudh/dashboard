const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const gulpUtil = require("gulp-util");
const nodemon = require("gulp-nodemon");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.prod.js");
const webpackDevConfig = require("./webpack.config.dev.js");

const webpackDevCompiler = webpack(webpackDevConfig);

gulp.task("webpack:build-dev", callback => {
  webpackDevCompiler.run((err, stats) => {
    if (err) throw new gulpUtil.PluginError("webpack:build-dev", err);
    gulpUtil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack:build", callback => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.PluginError("webpack:build", err);
    gulpUtil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("html", () => {
  gulp.src(["./client/index.html"])
    .pipe(gulp.dest("./public"));
});

gulp.task("eslint", () => {
  return gulp.src(["./client/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("watch", () => {
  gulp.watch("./public", ["html"]);
});

gulp.task("nodemon", () => {
  nodemon({
    script: "./server/server.js",
    ignore: ["public", "client"],
    ext: "html js"
  });
});

gulp.task("build-base", ["eslint", "html"]);
gulp.task("build-dev", ["build-base", "webpack:build-dev"]);
gulp.task("build", ["build-base", "webpack:build"]);
gulp.task("dev", ["build-dev", "watch", "nodemon"]);
gulp.task("default", ["build"]);
