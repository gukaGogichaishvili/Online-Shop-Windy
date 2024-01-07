import React, { createContext, useContext, useState, useEffect } from "react";
import { useFetchContext } from "./FetchContext";
import { useLocation, useNavigate } from "react-router-dom";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [queryCategory, setQueryCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [limit, setLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState(new Set());

  const { allProducts, totalProductsNumber, setTotalProductsNumber } =
    useFetchContext();

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const handleBrandFilter = (brand, isChecked) => {
    if (isChecked) {
      setBrandFilter(new Set(brandFilter.add(brand)));
    } else {
      brandFilter.delete(brand);
      setBrandFilter(new Set(brandFilter));
    }
  };

  const handleSearch = () => {
    if (location.pathname !== "/products") {
      navigate("/products");
    }
    setQueryCategory("");
    setCurrentPage(0);
    const filteredbySearch = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm),
    );
    setFilteredProducts(filteredbySearch);
    setSearchTerm("");
  };

  const clearAllFilter = () => {
    setSortBy("");
    setFilteredProducts(allProducts);
    setQueryCategory("");
    setBrandFilter(new Set());
    setPriceRange({ min: "", max: "" });
  };

  useEffect(() => {
    let filteredByBrand =
      brandFilter.size > 0
        ? allProducts.filter((product) => brandFilter.has(product.brand))
        : allProducts;

    const filtered = filteredByBrand.filter(
      (product) =>
        (queryCategory === "" || product.category === queryCategory) &&
        (priceRange.min === "" || product.price >= Number(priceRange.min)) &&
        (priceRange.max === "" || product.price <= Number(priceRange.max)),
    );

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.title.localeCompare(b.title);
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    const startIndex = currentPage * limit;
    const endIndex = startIndex + limit;
    const paginated = sorted.slice(startIndex, endIndex);

    setFilteredProducts(paginated);
    setTotalProductsNumber(sorted.length);
  }, [
    allProducts,
    queryCategory,
    currentPage,
    limit,
    priceRange,
    sortBy,
    brandFilter,
  ]);

  return (
    <FilterContext.Provider
      value={{
        setQueryCategory,
        handlePageChange,
        totalProductsNumber,
        limit,
        filteredProducts,
        setSortBy,
        setPriceRange,
        priceRange,
        currentPage,
        setFilteredProducts,
        searchTerm,
        setSearchTerm,
        handleSearch,
        setCurrentPage,
        clearAllFilter,
        sortBy,
        setBrandFilter: handleBrandFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
