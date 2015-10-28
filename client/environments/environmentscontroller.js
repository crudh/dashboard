import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {setEnvironment} from "../core/actions";
import EnvironmentsView from "./environmentsview";

class EnvironmentsController extends Component {
  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.environmentId !== this.props.environmentId) {
      this.loadData(nextProps);
    }
  }

  loadData(props) {
    props.setEnvironment(props.environmentId);
  }

  render() {
    return <EnvironmentsView {...this.props}/>;
  }
}

EnvironmentsController.propTypes = {
  list: PropTypes.array,
  active: PropTypes.object,
  environmentId: PropTypes.string
};

function mapStateToProps(state) {
  const {list, active} = state.environments;
  const {environmentId} = state.router.params;

  return {
    list,
    active,
    environmentId
  };
}

export default connect(mapStateToProps, {
  setEnvironment
})(EnvironmentsController);
