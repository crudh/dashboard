import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import EnvironmentsView from "./environmentsview";

class EnvironmentsController extends Component {
  render() {
    const {environments} = this.props;

    return <EnvironmentsView environments={environments}/>;
  }
}

EnvironmentsController.propTypes = {
  environments: PropTypes.array
};

export default connect(_ => _)(EnvironmentsController);
