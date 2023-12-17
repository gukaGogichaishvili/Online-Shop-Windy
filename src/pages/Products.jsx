import React, { useEffect, useState, createContext } from 'react';
import { CategoryFilter, ProductsList, SortBy } from '../components';
import { useSearch } from '../context/SearchContext';
import { useFilterContext } from '../context/FilterContext';

const Products = () => {

  const { setQueryCategory, handlePageChange, totalProductsNumber, limit,filteredProducts, setSortBy,
    setPriceRange, priceRange, currentPage} = useFilterContext();
 
  
  return (
   <>
      <SortBy />
      <CategoryFilter />
      <ProductsList />
      </>
  );
};

export default Products;
