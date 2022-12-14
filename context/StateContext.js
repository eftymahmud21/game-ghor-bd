import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [qty, setQty] = useState(1);
  const iQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const dQty = () => {
    setQty(1);
  };

  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const value = {
    qty,
    dQty,
    iQty,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
