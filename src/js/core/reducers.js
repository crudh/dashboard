const initialState = {
  environments: {
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
  }
};

function appReducer(state = initialState, action) {
  return state;
}

export default appReducer;
