const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const environments = require("./environments/environments_web");
const versions = require("./versions/versions_web");
const checks = require("./checks/checks_web");

const app = express();
const environment = app.get("env");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

environments.init(app);
versions.init(app);
checks.init(app);

app.get("/services/*", (req, res) => {
  res.status(404).send({message: "Not found"});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.listen(3000, "0.0.0.0", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Server running in " + environment + " mode (http://localhost:3000)");
});
