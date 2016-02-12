import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/">Start</Link>
          <span> - </span>
          <Link to="/checks">Checks</Link>
          <span> - </span>
          <Link to="/environments">Environments</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
