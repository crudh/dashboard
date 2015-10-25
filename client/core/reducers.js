import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import {SET_ENVIRONMENT} from "./actions";

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

function environments(state = initialEnvironments, action) {
  switch (action.type) {
    case SET_ENVIRONMENT:
      return Object.assign({}, state, {
        active: state.list.find(item => item.id === action.payload.id) || {}
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  environments,
  router: routerStateReducer
});

export default rootReducer;
