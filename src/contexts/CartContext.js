import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    return !cart.find((i) => i === item) ? setCart([...cart, item]) : null;
  };
  const removeItem = (id) => {
    // verilen itemi sepete ekleyin
    return setCart(cart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
