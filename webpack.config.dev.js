const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client",
    "./client/main"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      include: path.join(__dirname, 'client')
    }]
  }
};
