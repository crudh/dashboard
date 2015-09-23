const initialEnvironments = [
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

export function environments(state = initialEnvironments, action) {
  return state;
}

export function environment(state = {}, action) {
  return state;
}
