import { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {

  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (onSearch) => {
    const navigate = useNavigate();
    const location = useLocation();
    if (location.pathname !== '/products') {
      navigate('/products');
    }

 
    onSearch(searchTerm.trim().toLowerCase());
    setSearchTerm('');
    setQueryCategory('');
  };


  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};