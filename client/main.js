import "gridlex/dist/gridlex.css";
import "babel-polyfill";
import "whatwg-fetch";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IndexRoute, Route, Router, browserHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { syncHistory } from "react-router-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers/reducers";
import NotFoundView from "./components/common/notfoundview";
import AppView from "./components/appview";
import IndexView from "./indexview";
import ChecksController from "./components/checks/checkscontroller";
import EnvironmentsController from "./components/environments/environmentscontroller";

const nodeEnv = process.env.NODE_ENV || "development";

const reduxRouterMiddleware = syncHistory(browserHistory);
const middlewares = [thunk, reduxRouterMiddleware];

if (nodeEnv === "development") {
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AppView}>
            <IndexRoute component={IndexView}/>
            <Route path="environments" component={EnvironmentsController}/>
            <Route path="environments/:environmentId" component={EnvironmentsController}/>
            <Route path="checks" component={ChecksController}/>
            <Route path="*" component={NotFoundView}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById("main"));
