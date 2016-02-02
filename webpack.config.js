const path = require("path");
const webpack = require("webpack");

const nodeEnv = process.env.NODE_ENV || "development";

const config = {
  entry: [
    "./client/main"
  ],
  output: {
    path: path.join(__dirname, "public/build"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      include: path.join(__dirname, "client")
    }, {
      test: /\.css$/, loader: "style-loader!css-loader"
    }]
  }
};

if (nodeEnv == "production") {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

if (nodeEnv == "development") {
  config.devtool = "source-map";

  config.plugins.push(
    new webpack.NoErrorsPlugin()
  );
}

module.exports = config;
