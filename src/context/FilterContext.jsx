import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetchContext } from './FetchContext';
import { useSearch } from './SearchContext';

const FilterContext = createContext();



export const FilterProvider = ({ children }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [queryCategory, setQueryCategory] = useState('');
    const [sortBy, setSortBy] = useState(''); 
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000});  
    const [limit, setLimit] = useState(15);
    const [currentPage, setCurrentPage] = useState(0);

    const { allProducts, totalProductsNumber, setTotalProductsNumber } = useFetchContext();


    const { searchTerm } = useSearch();

 

    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage);
      }; 
    
      
      
    const calculateMaxPrice = () => {
        const maxPrice = Math.max(...allProducts.map(product => product.price), 0);
        setPriceRange({ min: 0, max: maxPrice });
      };
    

      useEffect(() => {
        
        calculateMaxPrice();
      }, [allProducts])
      
    
      useEffect(() => {
    
        const filtered = allProducts.filter(product => 
            (queryCategory === '' || product.category === queryCategory)  &&
            (product.price >= priceRange.min && product.price <= priceRange.max)
             && (searchTerm === '' ||
             product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.description.toLowerCase().includes(searchTerm.toLowerCase()))
       );
    
    
            const sorted = [...filtered].sort((a, b) => { 
              switch (sortBy) {
                case 'price':
                  return a.price - b.price;
                case 'name':
                  return a.title.localeCompare(b.title);
                default:
                  return 0; // No sorting
              }
            });
          
    
    
        const startIndex = currentPage * limit;
        const endIndex = startIndex + limit;
        const paginated = filtered.slice(startIndex, endIndex);
    
        setFilteredProducts(paginated);
        setTotalProductsNumber(filtered.length);
      }, [allProducts, queryCategory, currentPage, limit, priceRange, sortBy, searchTerm ]);
    




  return (
    <FilterContext.Provider  value={{ setQueryCategory, handlePageChange, totalProductsNumber, limit,filteredProducts, setSortBy,
        setPriceRange, priceRange, currentPage}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
