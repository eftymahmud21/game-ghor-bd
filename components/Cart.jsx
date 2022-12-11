import React from 'react';
import { cartData } from '../data/products';
import CartProducts from './CartProducts';

export const Cart = () => {
  console.log(
    cartData?.map((product) => {
      product.id;
    })
  );

  return (
    <div className='cart'>
      {cartData.map((product) => (
        <CartProducts
          name={product.name}
          key={product.id}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};
