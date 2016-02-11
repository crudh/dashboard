import React from "react";
import { IndexRoute, Route } from "react-router";
import NotFound from "../containers/notfound";
import App from "../containers/app";
import Index from "../containers/index";
import Checks from "../containers/checks";
import Environments from "../containers/environments";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="environments" component={Environments}/>
    <Route path="environments/:id" component={Environments}/>
    <Route path="checks" component={Checks}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
