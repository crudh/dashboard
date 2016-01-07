import "gridlex/dist/gridlex.css";

import "babel-polyfill";
import "whatwg-fetch";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {IndexRoute, Route, Router} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {syncReduxAndRouter} from "redux-simple-router";
import thunk from "redux-thunk";
import createHistory from "history/lib/createBrowserHistory";
import rootReducer from "./reducers/reducers";
import NotFoundView from "./components/common/notfoundview";
import AppView from "./components/appview";
import IndexView from "./indexview";
import ChecksController from "./components/checks/checkscontroller";
import EnvironmentsController from "./components/environments/environmentscontroller";

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const history = createHistory();

syncReduxAndRouter(history, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
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
