import React, { Component } from "react";
import { getSnkrs } from "../services/fakeSnkrService";
import Pagination from "../commons/pagination";
import { paginate } from "../utils/paginate";
import { getBrands } from "../services/fakeBrandService";
import ListGroup from "../components/listGroup";
import SnkrsTable from "./snkrTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "../commons/searchBox";

class Snkrs extends Component {
  state = {
    snkrs: [],
    pageSize: 4,
    currentPage: 1,
    brands: [],
    searchQuery: "",
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
    this.setState({ selectedBrand: brand, currentPage: 1, searchQuery: "" });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedBrand: null, currentPage: 1 });
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
      searchQuery,
      sortColumn
    } = this.state;

    let filtered = allSnkrs;

    if (searchQuery)
      filtered = allSnkrs.filter(s =>
        s.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBrand && selectedBrand._id)
      filtered = allSnkrs.filter(s => s.brand._id === selectedBrand._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const snkrs = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: snkrs };
  };

  render() {
    const { currentPage, pageSize, sortColumn, searchQuery } = this.state;
    const { length: count } = this.state.snkrs;

    if (count === 0)
      return (
        <h3>There are no snkrs in the database, please add to collection!</h3>
      );

    const { totalCount, data: snkrs } = this.getPageDate();

    console.log(snkrs);
    return (
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <ListGroup
            items={this.state.brands}
            selectedItem={this.state.selectedBrand}
            onItemSelect={this.handleBrandSelect}
          />
        </div>
        <div className="col-md-9 col-sm-12">
          <Link className="btn btn-sm btn-primary" to="/snkrform">
            Snkrs Form
          </Link>
          {totalCount === 1 ? (
            <h3 style={style}>
              There is only {totalCount} snkr in the collection
            </h3>
          ) : (
            <h3 style={style}>
              There are {totalCount} snkrs in the collection
            </h3>
          )}

          <SearchBox value={searchQuery} onChange={this.handleSearch} />
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

const style = {
  display: "flex",
  justifyContent: "center",
  fontSize: "1.5rem"
};
