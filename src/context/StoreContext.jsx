import { createContext, useState } from "react";
import { products } from "../assets/assets";
import toast from "react-hot-toast";
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    toast.success("Product Added Succesfully");
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
        toast.success("Product Deleted Succesfully");
      }
      return updatedCart;
    });
  };
  const value = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
