import "gridlex/dist/gridlex.css";
import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers/reducers";
import routes from "./routes/routes";

const nodeEnv = process.env.NODE_ENV || "development";

const middlewares = [
  thunk
];

let devTools = f => f;
if (nodeEnv === "development") {
  middlewares.push(createLogger());

  if (typeof window === "object" && typeof window.devToolsExtension !== "undefined") {
    devTools = window.devToolsExtension();
  }
}

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  devTools
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={history}/>
  </Provider>,
  document.getElementById("main")
);
