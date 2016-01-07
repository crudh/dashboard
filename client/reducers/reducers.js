import {combineReducers} from "redux";
import {routeReducer} from "redux-simple-router";
import checks from "./checksreducers";
import environments from "./environmentsreducers";

const rootReducer = combineReducers({
  checks,
  environments,
  routing: routeReducer
});

export default rootReducer;
