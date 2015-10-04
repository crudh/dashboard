var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var del = require("del");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var eslint = require("gulp-eslint");
var nodemon = require("gulp-nodemon");

var paths = {
  serverMain: "./server/server.js",
  publicDir: "./public",
  jsFiles: ["./client/**/*.js"],
  htmlFiles: ["./client/index.html"]
};

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  devCompiler.run(function(err, stats) {
    if (err) throw new gulpUtil.PluginError("webpack:build-dev", err);
    gulpUtil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack:build", function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(myConfig, function(err, stats) {
    if (err) throw new gulpUtil.PluginError("webpack:build", err);
    gulpUtil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack-dev-server", function() {
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;
  myConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");

  new WebpackDevServer(webpack(myConfig), {
    hot: true,
    historyApiFallback: false,
    contentBase: paths.publicDir + "/",
    publicPath: myConfig.output.publicPath,
    proxy: {
      "/services/*": "http://localhost:3000"
    },
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
      if (err) throw new gulpUtil.PluginError("webpack-dev-server", err);
      gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});

gulp.task("html", function() {
  gulp.src(paths.htmlFiles)
    .pipe(gulp.dest(paths.publicDir));
});

gulp.task("eslint", function() {
  return gulp.src(paths.jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("clean", function() {
  return del("public");
});

gulp.task("watch", function() {
  gulp.watch(paths.htmlFiles, ["html"]);
});

gulp.task("nodemon", function() {
  nodemon({
    script: paths.serverMain,
    ignore: ["public", "client"],
    ext: "html js"
  });
});

gulp.task("build-base", ["clean", "eslint", "html"]);
gulp.task("build-dev", ["build-base", "webpack:build-dev"]);
gulp.task("build", ["build-base", "webpack:build"]);
gulp.task("dev", ["build-dev", "watch", "webpack-dev-server", "nodemon"]);
gulp.task("default", ["build"]);
