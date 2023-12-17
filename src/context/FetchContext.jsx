import React, { createContext, useContext, useEffect, useState } from 'react';

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [totalProductsNumber, setTotalProductsNumber] = useState(0);

 
    const goGetAllProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        setAllProducts(data.products);
        setTotalProductsNumber(data.total);
      };
    
      useEffect(() => {
        goGetAllProducts();
      }, []);
    

  return (
    <FetchContext.Provider value={{ allProducts, totalProductsNumber, setTotalProductsNumber }}>
      {children}
    </FetchContext.Provider>
  );
};

export const useFetchContext = () => {
  return useContext(FetchContext);
};