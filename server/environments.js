const environments = {
  test: {
    id: "test",
    name: "Test"
  },
  qa: {
    id: "qa",
    name: "QA"
  },
  prod: {
    id: "prod",
    name: "Production"
  }
};

function getEnvironments() {
  return environments;
}

exports.getEnvironments = getEnvironments;
