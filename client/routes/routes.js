import React from "react";
import { IndexRoute, Route } from "react-router";
import NotFoundView from "../components/common/notfoundview";
import AppView from "../components/appview";
import IndexView from "../indexview";
import ChecksController from "../components/checks/checkscontroller";
import EnvironmentsController from "../components/environments/environmentscontroller";

export default (
  <Route path="/" component={AppView}>
    <IndexRoute component={IndexView}/>
    <Route path="environments" component={EnvironmentsController}/>
    <Route path="environments/:environmentId" component={EnvironmentsController}/>
    <Route path="checks" component={ChecksController}/>
    <Route path="*" component={NotFoundView}/>
  </Route>
);
