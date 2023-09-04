import React, { useState, createContext } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    return !cart.find((i) => i === item) ? setCart([...cart, item]) : null;
  };
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
