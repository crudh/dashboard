import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";
import checks from "./checksreducers";
import environments from "./environmentsreducers";

const rootReducer = combineReducers({
  checks,
  environments,
  routing,
  form
});

export default rootReducer;
