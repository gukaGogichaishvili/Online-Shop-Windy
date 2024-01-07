import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);
  // const [globalCartCounter, setGlobalCartCounter] = useLocalStorage('globalCartCounter', 0);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );
    //setGlobalCartCounter(globalCartCounter + 1);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    const removeCount = cart.filter((item) => item.id === itemId);

    //setGlobalCartCounter(globalCartCounter - Number(removeCount.quantity));
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        /*globalCartCounter*/ getTotalQuantity,
        calculateTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
