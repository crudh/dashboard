import "./environments.css";

import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

class TitleView extends Component {
  constructor() {
    super();

    this.selectEnvironment = this.selectEnvironment.bind(this);
  }

  selectEnvironment() {
    const { env, setEnvironment } = this.props;

    setEnvironment(env.id);
  }

  render() {
    const { env, active } = this.props;
    const title = env.id === active.id ?
      <span>{env.name}</span>
      : <Link to={`/environments/${env.id}`} onClick={this.selectEnvironment}>{env.name}</Link>;

    return (
      <li key={env.id}>
        {title}
      </li>
    );
  }
}

TitleView.propTypes = {
  setEnvironment: PropTypes.func.isRequired,
  env: PropTypes.object.isRequired,
  active: PropTypes.object
};

export default class EnvironmentsView extends Component {
  render() {
    const { list, active, setEnvironment } = this.props;
    if (!list) return (
      <span>No environments found</span>
    );

    const environmentList = list.map(env =>
      <TitleView key={env.id} {...{ env, active, setEnvironment }}/>
    );

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
  setEnvironment: PropTypes.func.isRequired,
  list: PropTypes.array,
  active: PropTypes.object
};
