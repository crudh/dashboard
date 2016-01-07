const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const gulpUtil = require("gulp-util");
const nodemon = require("gulp-nodemon");
const runSequnce = require("run-sequence");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.prod.js");
const webpackDevConfig = require("./webpack.config.dev.js");

gulp.task("webpack:build-dev", () => {
  process.env.NODE_ENV = "development";

  webpack(webpackDevConfig, (err, stats) => {
    if (err) throw new gulpUtil.PluginError("webpack:build-dev", err);
    gulpUtil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
  });
});

gulp.task("webpack:build", callback => {
  process.env.NODE_ENV = "production";

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
  gulp.watch("./client/**/*.html", ["html"]);
});

gulp.task("nodemon", () => {
  nodemon({
    script: "./server/server.js",
    ignore: ["public", "client"],
    ext: "html js"
  });
});

gulp.task("clean", () => {
  return del(["public"]);
});

gulp.task("build", callback => {
  runSequnce(
    "eslint",
    "clean",
    ["html", "webpack:build"],
    callback
  );
});

gulp.task("build-dev", callback => {
  runSequnce(
    "eslint",
    "clean",
    ["html", "webpack:build-dev"],
    callback
  );
});

gulp.task("dev", callback => {
  runSequnce(
    "build-dev",
    ["watch", "nodemon"],
    callback
  );
});

gulp.task("default", ["build"]);
