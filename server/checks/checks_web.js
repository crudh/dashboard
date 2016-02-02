import checks from "./checks";

function init(app) {
  app.get("/services/checks", (req, res) => {
    res.send(checks.getChecks());
  });
}

export default {
  init
};
