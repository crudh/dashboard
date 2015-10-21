import "babel-core/polyfill";
import "whatwg-fetch";

import React from "react";
import ReactDOM from "react-dom";
import Router, {Route, IndexRoute} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import createBrowserHistory from "history/lib/createBrowserHistory";
import rootReducer from "./core/reducers";
import NotFoundView from "./core/notfoundview";
import AppView from "./appview";
import IndexView from "./indexview";

const store = createStore(rootReducer);

const routes = (
  <Route path="/" component={AppView}>
    <IndexRoute component={IndexView}/>
    <Route path="*" component={NotFoundView}/>
  </Route>
);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById("main")
);
