import React, { Component } from "react";
import Input from "../commons/input";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.id] = input.value;

    this.setState({ account });
  };

  render() {
    return (
      <form onSumbit={this.handleSubmit}>
        <Input
          name="username"
          value={this.state.account.username}
          label="Username"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          value={this.state.account.password}
          label="Password"
          onChange={this.handleChange}
        />

        <button className="btn btn-primary"> Login</button>
      </form>
    );
  }
}

export default LoginForm;
