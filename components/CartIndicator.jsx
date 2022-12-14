import Image from 'next/image';
import React from 'react';
import CartIcon from '../images/carticon.svg';
import { Cart } from './Cart';

const CartIndicator = () => {
  return (
    <div className=''>
      <div className='cart-icon-container p-4'>
        <Image src={CartIcon} width={50} height={50} />
      </div>
    </div>
  );
};

export default CartIndicator;
