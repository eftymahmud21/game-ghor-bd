import React from 'react';
import { useContext } from 'react';
import ContextProvider from '../context/StateContext';

const CartProducts = ({ name, price, quantity }) => {
  const { iQty, dQty, qty } = useContext(ContextProvider);
  return (
    <div>
      <div className='container m-9 bg-light max-w-sm border-gray-200 rounded-lg shadow-md cart-container flex iphone'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-3'>
          {name}
        </h5>
        <div className='quantity flex gap-3 items-center'>
          <button
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            onClick={iQty}
          >
            +
          </button>
          <p>{qty}</p>
          <button
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            onClick={dQty}
          >
            -
          </button>
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
