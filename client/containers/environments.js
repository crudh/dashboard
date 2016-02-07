import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { setEnvironment } from "../actions/environmentsactions";
import EnvironmentsView from "../components/environments/environmentsview";

class Environments extends Component {
  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.environmentId === this.props.environmentId) return;

    this.loadData(nextProps);
  }

  loadData(props) {
    props.setEnvironment(props.environmentId);
  }

  render() {
    return <EnvironmentsView {...this.props}/>;
  }
}

Environments.propTypes = {
  list: PropTypes.array,
  active: PropTypes.object,
  environmentId: PropTypes.string
};

function mapStateToProps(state, props) {
  const { list, active } = state.environments;
  const { environmentId } = props.params;

  return {
    list,
    active,
    environmentId
  };
}

export default connect(mapStateToProps, {
  setEnvironment
})(Environments);