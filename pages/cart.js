import React from 'react';
import { Cart } from '../components/Cart';
import CartList from '../components/CartList';
import CartProducts from '../components/CartProducts';
import products from '../data/products';
import CartIndicator from '../components/CartIndicator';

const cart = () => {
  return (
    <div className=''>
      <Cart />
      <CartList />
      <CartIndicator />
    </div>
  );
};

export default cart;
