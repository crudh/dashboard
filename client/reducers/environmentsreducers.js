import {SET_ENVIRONMENT} from "../actions/environmentsactions";

const initialEnvironments = {
  list: [
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
  ],
  active: {}
};

export default function environments(state = initialEnvironments, action) {
  switch (action.type) {
    case SET_ENVIRONMENT:
      return Object.assign({}, state, {
        active: state.list.find(item => item.id === action.payload.id) || {}
      });
    default:
      return state;
  }
}
