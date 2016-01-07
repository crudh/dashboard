import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {fetchChecks} from "../../actions/actions";
import {INIT} from "../../core/statuses";
import ChecksView from "./checksview";

class ChecksController extends Component {
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

ChecksController.propTypes = {
  list: PropTypes.array,
  status: PropTypes.string.isRequired,
  error: PropTypes.string
};

function mapStateToProps(state) {
  const {list, status, error} = state.checks;

  return {
    list,
    status,
    error
  };
}

export default connect(mapStateToProps, {
  fetchChecks
})(ChecksController);