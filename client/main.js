import "gridlex/dist/gridlex.css";

import "babel-core/polyfill";
import "whatwg-fetch";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, IndexRoute} from "react-router";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import {reduxReactRouter, ReduxRouter} from "redux-router";
import createHistory from "history/lib/createBrowserHistory";
import rootReducer from "./core/reducers";
import NotFoundView from "./core/notfoundview";
import AppView from "./appview";
import IndexView from "./indexview";
import EnvironmentsController from "./environments/environmentscontroller";

const store = compose(
  reduxReactRouter({
    createHistory
  })
)(createStore)(rootReducer);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={AppView}>
            <IndexRoute component={IndexView}/>
            <Route path="environments" component={EnvironmentsController}/>
            <Route path="environments/:environmentId" component={EnvironmentsController}/>
            <Route path="*" component={NotFoundView}/>
          </Route>
        </ReduxRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById("main"));
