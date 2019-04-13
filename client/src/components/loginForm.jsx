import React, { Component } from "react";
import Input from "../commons/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: {
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

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.id] = input.value;

    this.setState({ account });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          value={this.state.account.username}
          label="Username"
          onChange={this.handleChange}
          error={this.state.errors.username}
        />
        <Input
          name="password"
          value={this.state.account.password}
          label="Password"
          onChange={this.handleChange}
          error={this.state.errors.password}
        />

        <button className="btn btn-primary"> Login</button>
      </form>
    );
  }
}

export default LoginForm;
