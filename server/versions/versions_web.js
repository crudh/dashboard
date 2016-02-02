import versions from "./versions";

function init(app) {
  app.get("/services/versions", (req, res) => {
    res.send(versions.getVersions());
  });
}

export default {
  init
};
