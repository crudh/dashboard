import environments from "./environments";

function init(app) {
  app.get("/services/environments", (req, res) => {
    res.send(environments.getEnvironments());
  });
}

export default {
  init
};
