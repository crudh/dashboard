import React, {Component} from "react";
import {connect} from "react-redux";
import EnvironmentsView from "./environments/environmentsview";

class IndexView extends Component {
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <EnvironmentsView/>
      </div>
    );
  }
}

export default connect(_ => _)(IndexView);
