import React from 'react';
import { Cart } from '../components/Cart';
import CartList from '../components/CartList';
import CartProducts from '../components/CartProducts';
import products from '../data/products';

const cart = () => {
  return (
    <div className=''>
      <Cart />
      <CartList />
    </div>
  );
};

export default cart;
