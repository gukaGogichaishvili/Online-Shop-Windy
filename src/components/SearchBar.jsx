import React, { useContext, useState } from 'react';
import { useFilterContext } from '../context/FilterContext';
import { useSearch } from '../context/SearchContext';


const SearchBar = () => {
const {setSearchTerm, handleSearch, searchTerm} = useSearch();


  return (
    <div className="flex items-center ml-4  mx-auto">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;