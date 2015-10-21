import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {setEnvironment} from "../core/actions";
import EnvironmentsView from "./environmentsview";

class EnvironmentsController extends Component {
  render() {
    const {dispatch, list, active} = this.props;

    return (
      <EnvironmentsView
        setEnvironment={id => dispatch(setEnvironment(id))}
        list={list}
        active={active}/>
    );
  }
}

EnvironmentsController.propTypes = {
  list: PropTypes.array,
  active: PropTypes.object
};

export default connect(state => state.environments)(EnvironmentsController);
