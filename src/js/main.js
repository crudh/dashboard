import "babelify/polyfill";
import "whatwg-fetch";

import React from "react";
import Router, {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from "react-router";
import NotFoundView from "./core/notfoundview";
import IndexView from "./indexview";

const MainView = React.createClass({
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
});

const routes = (
  <Route handler={MainView}>
    <DefaultRoute name="index" handler={IndexView}/>
    <NotFoundRoute handler={NotFoundView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById("main"));
});

export default MainView;
