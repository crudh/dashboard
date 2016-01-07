import {combineReducers} from "redux";
import {routeReducer} from "redux-simple-router";
import checks from "./checksReducers";
import environments from "./environmentsReducers";

const rootReducer = combineReducers({
  checks,
  environments,
  routing: routeReducer
});

export default rootReducer;
