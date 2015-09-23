const express = require("express");
const bodyParser = require("body-parser");
const environments = require("./environments_web");
const versions = require("./versions_web");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

environments.init(app);
versions.init(app);

app.get('*', (req, res) => {
  res.sendFile("index.html", {"root": __dirname + "/../public/"});
});

app.listen(3000);
