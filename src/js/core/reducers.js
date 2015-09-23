const initialState = {
  environments: [
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
  ]
};

function appReducer(state = initialState, action) {
  return state;
}

export default appReducer;
