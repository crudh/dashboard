import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { INIT } from "../core/statuses";
import ChecksView from "../components/checks/checksview";

class Checks extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    const { status, fetchChecks } = this.props;
    if (status !== INIT) return;

    fetchChecks();
  }

  render() {
    return <ChecksView {...this.props}/>;
  }
}

Checks.propTypes = {
  addCheck: PropTypes.func.isRequired,
  fetchChecks: PropTypes.func.isRequired,
  list: PropTypes.array,
  status: PropTypes.string.isRequired,
  error: PropTypes.string
};

function mapStateToProps(state) {
  const { list, status, error } = state.checks;

  return {
    list,
    status,
    error
  };
}

import { fetchChecks, addCheck } from "../actions/checksactions";

export default connect(mapStateToProps, {
  fetchChecks,
  addCheck
})(Checks);
