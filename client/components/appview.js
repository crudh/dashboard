import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class AppView extends Component {
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

AppView.propTypes = {
  children: PropTypes.element.isRequired
};
