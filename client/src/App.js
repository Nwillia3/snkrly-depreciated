import React, { Component } from "react";
import "./App.css";
import Snkrs from "./components/snkrs";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./commons/navBar";
import SnkrForm from "./components/snkrForm";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="container">
          <Switch>
            <Route path="/snkrs/:id/:name" component={SnkrForm} />

            <Route path="/snkrs" component={Snkrs} />
            <Route path="/login" component={LoginForm} />

            <Route path="/snkrForm" component={SnkrForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/snkrs" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
