import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const deleteItem =(id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }

  const cartQuantity = () =>{
    return cart.reduce((acc, item)=> acc + item.quantity, 0)
  }

  const total = () => {
    return cart.reduce((acc, item)=> acc + item.quantity * item.price, 0)
  }
  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, deleteItem, cartQuantity,total}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;