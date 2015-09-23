import React from "react";
import {connect} from "react-redux";
import EnvironmentsView from "./environments/environmentsview";

class IndexView extends React.Component {
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <EnvironmentsView/>
      </div>
    );
  }
}

export default connect(state => state)(IndexView);
