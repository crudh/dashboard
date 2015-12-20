import React, {Component, PropTypes} from "react";


export default class ChecksView extends Component {
  render() {
    const {list} = this.props;
    if (!list) return (
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
  list: PropTypes.array
};
