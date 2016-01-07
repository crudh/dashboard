import React, {Component, PropTypes} from "react";
import {OK} from "../../core/statuses";

export default class ChecksView extends Component {
  render() {
    const {list, status, error} = this.props;

    if (status !== OK) return (
      <span>{status} {error}</span>
    );

    if (!list || list.length === 0) return (
      <span>No checks found</span>
    );

    const checksList = list.map(check => {
      return (
        <div key={check.id} className="col-12 grid">
          <div className="col-3">{check.name}</div>
          <div className="col-9">{check.status}</div>
        </div>
      );
    });

    return (
      <div className="grid">
        <div className="col-3">
          <h3>Name</h3>
        </div>
        <div className="col-9">
          <h3>Status</h3>
        </div>

        {checksList}
      </div>
    );
  }
}

ChecksView.propTypes = {
  list: PropTypes.array,
  status: PropTypes.string.isRequired,
  error: PropTypes.string
};
