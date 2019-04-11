import React, { Component } from "react";
import { getSnkrs } from "../services/fakeSnkrService";
import Pagination from "../commons/pagination";
import { paginate } from "../utils/paginate";
import { getBrands } from "../services/fakeBrandService";
import ListGroup from "../components/listGroup";
import SnkrsTable from "./snkrTable";
import _ from "lodash";

class Snkrs extends Component {
  state = {
    snkrs: [],
    pageSize: 4,
    currentPage: 1,
    brands: [],
    selectedBrand: "",
    sortColumn: { path: "brand", order: "asc" }
  };

  componentDidMount() {
    const brands = [{ _id: "", name: "All Brands" }, ...getBrands()];
    this.setState({ snkrs: getSnkrs(), brands: brands });
  }

  handleDelete = snkr => {
    const snkrs = this.state.snkrs.filter(s => s._id !== snkr._id);
    this.setState({ snkrs });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleBrandSelect = brand => {
    this.setState({ selectedBrand: brand, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageDate = () => {
    const {
      currentPage,
      pageSize,
      snkrs: allSnkrs,
      selectedBrand,
      sortColumn
    } = this.state;

    const filtered =
      selectedBrand && selectedBrand._id
        ? allSnkrs.filter(s => s.brand._id === selectedBrand._id)
        : allSnkrs;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const snkrs = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: snkrs };
  };

  render() {
    const { currentPage, pageSize, sortColumn } = this.state;
    const { length: count } = this.state.snkrs;

    if (count === 0)
      return (
        <h3> There are no snkrs in the database, please add to collection!</h3>
      );

    const { totalCount, data: snkrs } = this.getPageDate();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.brands}
            selectedItem={this.state.selectedBrand}
            onItemSelect={this.handleBrandSelect}
          />
        </div>
        <div className="col">
          <h3> Showing {totalCount} snkrs in the database</h3>
          <SnkrsTable
            snkrs={snkrs}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Snkrs;
