import React from 'react';
import { useContext } from 'react';
import ContextProvider from '../context/StateContext';

const CartProducts = ({ name, price, id }) => {
  const {
    iQty,
    dQty,
    qty,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ContextProvider);

  const quantity = getItemQuantity(id);

  return (
    <div>
      <div className='container m-9 bg-light max-w-sm border-gray-200 rounded-lg shadow-md cart-container flex iphone'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-800 p-3'>
          {name}
        </h5>
        <div className='quantity flex gap-3 items-center'>
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </button>
          ) : (
            <div className=''>
              <button
                className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
              {quantity}
              <button
                className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <button onClick={() => removeFromCart(id)}>Remove Item</button>
            </div>
          )}

          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
