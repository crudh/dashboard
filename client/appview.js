import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

export default class MainView extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Main</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

MainView.propTypes = {
  children: PropTypes.element.isRequired
};
