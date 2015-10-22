import React, {Component, PropTypes} from "react";

class TitleView extends Component {
  render() {
    const {setEnvironment, env, activeId} = this.props;
    if (env.id === activeId) {
      return <span>{env.name}</span>;
    }

    return (
      <a href="#" onClick={() => setEnvironment(env.id)}>
        {env.name}
      </a>
    );
  }
}

export default class EnvironmentsView extends Component {
  render() {
    const {setEnvironment, list, active} = this.props;
    if (!list) return (
      <span>No environments found</span>
    );

    const environmentList = list.map(env => {
      return (
        <li key={env.id}>
          <TitleView
            env={env}
            activeId={active.id}
            setEnvironment={setEnvironment}/>
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
  setEnvironment: PropTypes.func,
  list: PropTypes.array,
  active: PropTypes.object
};
