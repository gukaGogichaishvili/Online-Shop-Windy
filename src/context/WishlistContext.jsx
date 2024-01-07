import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  const toggleWishlistItem = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    if (isProductInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};
