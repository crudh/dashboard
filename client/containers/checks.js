import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchChecks, addCheck } from "../actions/checksactions";
import { INIT } from "../core/statuses";
import ChecksView from "../components/checks/checksview";

class Checks extends Component {
  componentWillMount() {
    this.loadData(this.props);
  }

  loadData(props) {
    if (props.status !== INIT) return;

    props.fetchChecks();
  }

  render() {
    return <ChecksView {...this.props}/>;
  }
}

Checks.propTypes = {
  list: PropTypes.array,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
  addCheck: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { list, status, error } = state.checks;

  return {
    list,
    status,
    error
  };
}

export default connect(mapStateToProps, {
  fetchChecks,
  addCheck
})(Checks);
