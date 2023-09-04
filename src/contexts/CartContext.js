import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialCart = () => JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin

    return !cart.find((i) => i === item) ? setCart([...cart, item]) : null;
  };
  const removeItem = (id) => {
    // verilen itemi sepete ekleyin
    setCart(cart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
