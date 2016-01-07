const path = require("path");
const webpack = require("webpack");

module.exports = {
  watch: true,
  devtool: "source-map",
  entry: [
    "./client/main"
  ],
  output: {
    path: path.join(__dirname, "public"),
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
      include: path.join(__dirname, 'client')
    }, {
      test: /\.css$/, loader: "style-loader!css-loader"
    }]
  }
};
