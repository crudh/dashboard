import "./environments.css";

import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

class TitleView extends Component {
  render() {
    const {env, activeId} = this.props;
    if (env.id === activeId) {
      return <span>{env.name}</span>;
    }

    return <Link to={`/environments/${env.id}`}>{env.name}</Link>;
  }
}

TitleView.propTypes = {
  env: PropTypes.object.isRequired,
  activeId: PropTypes.string
};

export default class EnvironmentsView extends Component {
  render() {
    const {list, active} = this.props;
    if (!list) return (
      <span>No environments found</span>
    );

    const environmentList = list.map(env => {
      return (
        <li key={env.id}>
          <TitleView
            env={env}
            activeId={active.id}/>
        </li>
      );
    });

    return (
      <div className="grid">
        <div className="col-3">
          <h3>Name</h3>
        </div>
        <div className="col-9">
          <h3>Content</h3>
        </div>

        <div className="col-3">
          <ul>
            {environmentList}
          </ul>
        </div>
        <div className="col-9">
          content goes here...
        </div>
      </div>
    );
  }
}

EnvironmentsView.propTypes = {
  list: PropTypes.array,
  active: PropTypes.object
};
