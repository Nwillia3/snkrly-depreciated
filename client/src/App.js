import React, { Component } from "react";
import "./App.css";
import Snkrs from "./components/snkrs";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Snkrs />
      </main>
    );
  }
}

export default App;
