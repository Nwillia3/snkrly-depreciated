import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize }) => {
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1); // gives a range for the pagination, +1 used as pagesCount itself isnt counted

  if (pagesCount < 2) return null; // edge case if there is only one page of snkrs

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link"> {page} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
