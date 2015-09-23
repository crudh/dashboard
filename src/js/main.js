import "babelify/polyfill";
import "whatwg-fetch";

import React from "react";
import Router, {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import appReducer from "./core/reducers";
import NotFoundView from "./core/notfoundview";
import IndexView from "./indexview";

const store = createStore(appReducer);

class MainView extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="index">Main</Link>
        </div>
        <RouteHandler/>
      </div>
    );
  }
}

const routes = (
  <Route handler={MainView}>
    <DefaultRoute name="index" handler={IndexView}/>
    <NotFoundRoute handler={NotFoundView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  React.render(
    <Provider store={store}>
      {() => <Handler routerState={routerState}/>}
    </Provider>,
    document.getElementById("main")
  );
});

export default MainView;
