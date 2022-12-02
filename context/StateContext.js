import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [qty, setQty] = useState(100);
  const iQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const dQty = () => {
    setQty(1);
  };

  const value = {
    qty,
    dQty,
    iQty,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
