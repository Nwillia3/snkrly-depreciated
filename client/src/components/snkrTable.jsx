import React, { Component } from "react";
import Table from "../commons/table";
import { Link } from "react-router-dom";

class SnkrsTable extends Component {
  columns = [
    {
      path: "brand.name",
      label: "Brand",
      content: snkr => (
        <Link to={`/snkrs/${snkr._id}/${snkr.name}`}> {snkr.brand.name}</Link>
      )
    },
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
      <Table
        columns={this.columns}
        data={snkrs}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default SnkrsTable;
