import React, {Component, PropTypes} from "react";

export default class EnvironmentsView extends Component {
  renderTitle(item) {
    const {setEnvironment, active} = this.props;
    if (item.id === active.id) return item.name;

    return (
      <a href="#" onClick={() => setEnvironment(item.id)}>
        {item.name}
      </a>
    );
  }

  render() {
    const {list} = this.props;
    if (!list) return (
      <span>No environments found</span>
    );

    const environmentList = list.map(item => {
      return (
        <li key={item.id}>
          {this.renderTitle(item)}
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
