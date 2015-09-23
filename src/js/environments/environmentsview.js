import React, {Component, PropTypes} from "react";

export default class EnvironmentsView extends Component {
  render() {
    const environments = this.props.environments;
    if (!environments) return (
      <span>No environments found</span>
    );

    const environmenList = environments.map(env => (
      <li key={env.id}>{env.name}</li>
    ));

    return (
      <ul>
        {environmenList}
      </ul>
    );
  }
}

EnvironmentsView.propTypes = {
  environments: PropTypes.array
};
