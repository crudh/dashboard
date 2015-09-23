import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import EnvironmentsView from "./environments/environmentsview";

class IndexView extends Component {
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <EnvironmentsView environments={this.props.environments}/>
      </div>
    );
  }
}

IndexView.propTypes = {
  environments: PropTypes.array
};

export default connect(_ => _)(IndexView);
