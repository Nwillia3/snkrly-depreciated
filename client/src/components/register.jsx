import React from "react";
import Joi from "joi-browser";
import Form from "../commons/form";

class RegisterForm extends Form {
  state = {
    data: {},
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(4)
      .label("Password"),
    email: Joi.string()
      .required()
      .label("Email"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*  helper methods used in the common/form to render the inputs */}
        {this.renderInput("email", "Email")}
        {this.renderInput("name", "Name")}

        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}

        {this.renderButton("Sign up")}
      </form>
    );
  }
}

export default RegisterForm;
