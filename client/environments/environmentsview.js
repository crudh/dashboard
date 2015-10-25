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
      <ul>
        {environmentList}
      </ul>
    );
  }
}

EnvironmentsView.propTypes = {
  list: PropTypes.array,
  active: PropTypes.object
};
