

import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
 
  const [cart, setCart] = useLocalStorage('shoppingCart', []);

  const addToCart = (item) => {
   
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
     
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
   
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
