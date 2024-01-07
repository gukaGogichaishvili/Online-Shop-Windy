import React, { useContext, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchContext } from "../context/FetchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, handleSearch } = useFilterContext();

  return (
    <div className="input-group d-none d-lg-flex mx-4">
      <input
        className="form-control rounded-end pe-5"
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <i
        className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
