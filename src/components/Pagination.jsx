import React from "react";
import { useFilterContext } from "../context/FilterContext";

const Pagination = () => {
  const {
    handlePageChange,
    totalProductsNumber,
    filteredProducts,
    currentPage,
  } = useFilterContext();

  let totalPages = totalProductsNumber / 12;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          className={`page-item d-none d-sm-block ${
            currentPage === i ? "active" : ""
          }`}
          key={i}
          onClick={() => {
            handlePageChange(i);
            filteredProducts && window.scrollTo(0, document.body.scrollHeight);
          }}
        >
          <button className="page-link">
            {i + 1}
          </button>
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <nav
      className="d-flex justify-content-center pt-2"
      aria-label="Page navigation"
    >
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;
