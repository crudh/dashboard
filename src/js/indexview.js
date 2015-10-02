import React, {Component} from "react";
import EnvironmentsController from "./environments/environmentscontroller";

export default class IndexView extends Component {
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <EnvironmentsController/>
      </div>
    );
  }
}
