import React from 'react';
import StoreItems from '../data/products';
import CartProducts from './CartProducts';

export const Cart = () => {
  return (
    <div className='cart'>
      {StoreItems.map((item) => (
        <CartProducts {...item} />
      ))}
    </div>
  );
};
