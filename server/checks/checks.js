const checks = [
  {
    id: "test1",
    name: "Test 1",
    status: "OK"
  },
  {
    id: "test2",
    name: "Test 2",
    status: "FAIL"
  }
];

function getChecks() {
  return checks;
}

exports.getChecks = getChecks;
