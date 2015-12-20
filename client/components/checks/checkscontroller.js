import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {fetchChecks} from "../../actions/actions";
import ChecksView from "./checksview";

class ChecksController extends Component {
  componentWillMount() {
    this.loadData(this.props);
  }

  loadData(props) {
    if (props.list) return;

    props.fetchChecks();
  }

  render() {
    return <ChecksView {...this.props}/>;
  }
}

ChecksController.propTypes = {
  list: PropTypes.array
};

function mapStateToProps(state) {
  const {list} = state.checks;

  return {
    list
  };
}

export default connect(mapStateToProps, {
  fetchChecks
})(ChecksController);
