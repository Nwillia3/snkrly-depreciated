import React, { Component } from "react";
import TableHeader from "../commons/tableHeader";
import TableBody from "../commons/tableBody";

class SnkrsTable extends Component {
  columns = [
    { path: "brand.name", label: "Brand" },
    { path: "name", label: "Name" },
    { path: "pairsInStock", label: "Stock" },
    { path: "hotRate", label: "Hotness" },
    {
      key: "delete",
      content: snkr => (
        <button
          onClick={() => this.props.onDelete(snkr)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { snkrs, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={snkrs} columns={this.columns} />
      </table>
    );
  }
}

export default SnkrsTable;
