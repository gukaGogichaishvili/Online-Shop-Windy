import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (location.pathname !== "/products") {
      navigate("/products");
    }
    setQueryCategory("");
    setCurrentPage(0);
    const filteredbySearch = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filteredbySearch);
    setSearchTerm("");
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
