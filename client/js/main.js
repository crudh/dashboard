import "babelify/polyfill";
import "whatwg-fetch";

import React from "react";
import Router, {Route, IndexRoute} from "react-router";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import createBrowserHistory from "history/lib/createBrowserHistory";
import * as reducers from "./core/reducers";
import NotFoundView from "./core/notfoundview";
import AppView from "./appview";
import IndexView from "./indexview";

const appReducer = combineReducers(reducers);
const store = createStore(appReducer);

const routes = (
  <Route path="/" component={AppView}>
    <IndexRoute component={IndexView}/>
    <Route path="*" component={NotFoundView}/>
  </Route>
);

const history = createBrowserHistory();

React.render(
  <Provider store={store}>
    {() => <Router history={history}>{routes}</Router>}
  </Provider>,
  document.getElementById("main")
);
