const environments = [
  {
    id: "test",
    name: "Test"
  },
  {
    id: "qa",
    name: "QA"
  },
  {
    id: "prod",
    name: "Production"
  }
];

function getEnvironments() {
  return environments;
}

exports.getEnvironments = getEnvironments;
