import React from "react";
import Joi from "joi-browser";
import Form from "../commons/form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //Call Server
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*  helper methods used in the common/form to render the inputs */}
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default LoginForm;
