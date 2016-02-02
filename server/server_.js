import path from "path";
import express from "express";
import bodyParser from "body-parser";
import environments from "./environments/environments_web";
import versions from "./versions/versions_web";
import checks from "./checks/checks_web";

const app = express();
const environment = app.get("env");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

environments.init(app);
versions.init(app);
checks.init(app);

app.get("/services/*", (req, res) => {
  res.status(404).send({ message: "Not found" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

const host = "0.0.0.0";
const port = 3000;
app.listen(port, host, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server running in ${environment} mode (http://${host}:${port})`);
});
