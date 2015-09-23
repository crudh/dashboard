import React, {PropTypes} from "react";
import {Link} from "react-router";

export default class MainView extends React.Component {
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
