import React, { Component } from "react";
import { getSnkrs } from "../services/fakeSnkrService";

class Snkrs extends Component {
  state = {
    snkrs: getSnkrs()
  };

  handleDelete = snkr => {
    const snkrs = this.state.snkrs.filter(s => s._id !== snkr._id);
    this.setState({ snkrs });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Stock</th>
            <th> Hotness</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.snkrs.map(snkr => (
            <tr key={snkr._id}>
              <td>{snkr.brand.name}</td>
              <td>{snkr.name}</td>
              <td>{snkr.pairsInStock}</td>
              <td>{snkr.hotRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(snkr)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Snkrs;
