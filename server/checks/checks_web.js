const checks = require("./checks");

const init = app => {
  app.get("/services/checks", (req, res) => {
    res.send(checks.getChecks());
  });
};

exports.init = init;
