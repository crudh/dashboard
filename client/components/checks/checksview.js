import React, { Component, PropTypes } from "react";
import { OK } from "../../core/statuses";
import CheckForm from "./checkform";

export default class ChecksView extends Component {
  renderChecks(list, status, error) {
    if (status !== OK) return (
      <div className="col-12">{status} {error}</div>
    );

    if (!list || list.length === 0) return (
      <div className="col-12">No checks found</div>
    );

    return list.map(check => (
      <div key={check.id} className="col-12 grid">
        <div className="col-3">{check.name}</div>
        <div className="col-9">{check.status}</div>
      </div>
    ));
  }

  render() {
    const { list, status, error, addCheck } = this.props;

    return (
      <div className="grid">
        <div className="col-6 grid">
          <div className="col-3">
            <h3>Name</h3>
          </div>
          <div className="col-9">
            <h3>Status</h3>
          </div>

          {this.renderChecks(list, status, error)}
        </div>
        <div className="col-6 grid">
          <div className="col-12">
            <h3>Add check</h3>
          </div>
          <div className="col-12">
            <CheckForm onSubmit={addCheck}/>
          </div>
        </div>
      </div>
    );
  }
}

ChecksView.propTypes = {
  list: PropTypes.array,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
  addCheck: PropTypes.func.isRequired
};
