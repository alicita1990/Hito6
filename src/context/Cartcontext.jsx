import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function apiFetch() {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas'); 
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    apiFetch();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]); 

  const globalState = {
    data
  };

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === pizza.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => 
      prevCart
        .map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const incrementQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price || 0) * pizza.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotal,
        data,
        setData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 
