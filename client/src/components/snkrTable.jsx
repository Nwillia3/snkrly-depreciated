import React, { Component } from "react";

class SnkrsTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn }; // cloning the sortcolumn
    if (sortColumn.path === path)
      // change sort order if order is the same
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      // if the path is different
      sortColumn.path = path;
      sortColumn.order = "asc"; // sorting should be ascending whenever sorting a new column
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { snkrs, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("brand.name")}>Brand</th>
            <th onClick={() => this.raiseSort("name")}>Name</th>
            <th onClick={() => this.raiseSort("pairsInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("hotRate")}> Hotness</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {snkrs.map(snkr => (
            <tr key={snkr._id}>
              <td>{snkr.brand.name}</td>
              <td>{snkr.name}</td>
              <td>{snkr.pairsInStock}</td>
              <td>{snkr.hotRate}</td>
              <td>
                <button
                  onClick={() => onDelete(snkr)}
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

export default SnkrsTable;
