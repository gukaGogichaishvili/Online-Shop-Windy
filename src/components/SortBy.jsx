import React, {  useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const SortBy = () => {
  const {
    setSortBy,
    setCurrentPage,
    sortBy,
    handlePageChange,
    totalProductsNumber,
    limit,
    currentPage,
  } = useFilterContext();

  let totalPages = Math.ceil(totalProductsNumber / limit);



  const options = [
    { value: "", label: "None" },
    { value: "price", label: "Price (Ascending)" },
    { value: "price-desc", label: "Price (Descending)" },
    { value: "name", label: "Name" },
    { value: "rating", label: "Rating (Descending)" },
  ];

  return (
    <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
      <div className="d-flex flex-wrap">
        <div className="d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3">
          <label
            className="text-light fs-sm opacity-75 text-nowrap me-2 d-none d-sm-block"
            htmlFor="sorting"
          >
            Sort by:
          </label>
          <select
            className="form-select"
            id="sorting"
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(0);
            }}
            value={sortBy}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex pb-3">
        <button
          className="nav-link-style nav-link-light me-3"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(Math.max(currentPage - 1, 0));
          }}
        >
          <i className="ci-arrow-left" />
        </button>
        <span className="fs-md text-light">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          className="nav-link-style nav-link-light ms-3"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(Math.min(currentPage + 1, totalPages - 1));
          }}
        >
          <i className="ci-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default SortBy;
