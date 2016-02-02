import { combineReducers } from "redux";
import { routeReducer } from "redux-simple-router";
import { reducer as formReducer } from "redux-form";
import checks from "./checksreducers";
import environments from "./environmentsreducers";

const rootReducer = combineReducers({
  checks,
  environments,
  routing: routeReducer,
  form: formReducer
});

export default rootReducer;
