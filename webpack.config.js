var path = require("path");
var webpack = require("webpack");

var paths = {
  main: "./client/main.js",
  publicDir: "public"
};

module.exports = {
  cache: true,
  entry: {
    app: [paths.main]
  },
  output: {
    path: path.join(__dirname, paths.publicDir),
    //publicPath: paths.publicDir + "/",
    publicPath: "/",
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: []
};
