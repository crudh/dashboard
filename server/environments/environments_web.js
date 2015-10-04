const environments = require("./environments");

const init = app => {
  app.get("/services/environments", (req, res) => {
    res.send(environments.getEnvironments());
  });
};

exports.init = init;
