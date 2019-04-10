import React, { Component } from "react";
import { getSnkrs } from "../services/fakeSnkrService";
import Pagination from "../commons/pagination";

class Snkrs extends Component {
  state = {
    snkrs: getSnkrs(),
    pageSize: 4
  };

  handleDelete = snkr => {
    const snkrs = this.state.snkrs.filter(s => s._id !== snkr._id);
    this.setState({ snkrs });
  };

  handlePageChange = page => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.snkrs;
    if (count === 0)
      return (
        <h3> There are no snkrs in the database, please add to collection!</h3>
      );

    return (
      <React.Fragment>
        <h3> Showing {count} snkrs in the database</h3>
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
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={() => this.handlePageChange()}
        />
      </React.Fragment>
    );
  }
}

export default Snkrs;
