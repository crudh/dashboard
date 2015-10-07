const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const environments = require("./environments/environments_web");
const versions = require("./versions/versions_web");

const app = express();
const environment = app.get("env");

if (environment === "development") {
  const webpack = require("webpack");
  const webpackDevConfig = require("../webpack.config.dev");

  const compiler = webpack(webpackDevConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

environments.init(app);
versions.init(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(3000, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Server running in " + environment + " mode (http://localhost:3000)");
});
