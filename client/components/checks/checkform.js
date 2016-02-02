import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";

class CheckForm extends Component {
  render() {
    const { fields: { name }, handleSubmit } = this.props;

    return (
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Name" {...name}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

CheckForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

CheckForm = reduxForm({
  form: "check",
  fields: ["name"]
})(CheckForm);

export default CheckForm;
