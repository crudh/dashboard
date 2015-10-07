const versions = require("./versions");

const init = app => {
  app.get("/services/versions", (req, res) => {
    res.send(versions.getVersions());
  });
};

exports.init = init;
