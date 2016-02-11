import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { routeActions } from "react-router-redux";
import EnvironmentsView from "../components/environments/environmentsview";

class Environments extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    const { params, setEnvironment } = this.props;
    if (!params || !params.id) return;

    setEnvironment(params.id);
  }

  render() {
    const { list, active, setEnvironment, push } = this.props;

    return <EnvironmentsView {...{ list, active, setEnvironment, push }}/>;
  }
}

Environments.propTypes = {
  setEnvironment: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  params: PropTypes.object,
  list: PropTypes.array,
  active: PropTypes.object
};

function mapStateToProps(state, props) {
  const { list, active } = state.environments;

  return {
    params: props.params,
    list,
    active
  };
}

import { setEnvironment } from "../actions/environmentsactions";

export default connect(mapStateToProps, {
  setEnvironment,
  push: routeActions.push
})(Environments);
