import "gridlex/dist/gridlex.css";
import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { syncHistory } from "react-router-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers/reducers";
import routes from "./routes/routes";

const nodeEnv = process.env.NODE_ENV || "development";

const middlewares = [
  thunk,
  syncHistory(browserHistory)
];

if (nodeEnv === "development") {
  middlewares.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById("main")
);
