import React from 'react'

const CartList = () => {
  return (
    <div className='container m-9 bg-light max-w-sm border-gray-200 rounded-lg shadow-md cart-container flex flex-col Pixel'>
      <h1 className='font-bold'>Iphone</h1>
      <h1 className='font-bold'>Pixel</h1>
      <h1 className='font-bold'>Samsung</h1>
      <h1>Total Price :</h1>
      <button className='align-center'>Checkout</button>

    </div>
  )
}

export default CartList