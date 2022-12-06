import Image from 'next/image';
import React from 'react';
import logo from './logo.png';
import pp from '../images/pp.jpg';
const Navbar = () => {
  return (
    <div className=' mb-6 p-1 flex justify-between items-center  font-medium shadow-md sticky'>
      <div className='left-nav flex gap-3 items-center'>
        <Image className='pr-2 ' src={logo} width={60} height={30} />
        <h1 className=''> Browse</h1>
      </div>
      <div className='middle-nav grow-1 '>Search</div>
      <div className='right-nav flex gap-3 items-center pr-2'>
        <h1>Upcoming</h1>
        <h1></h1>
        <h1>Top Games</h1>
        <h1>Catagories</h1>
        <h1>On Sale</h1>

        <div className='profile'>
          <Image
            className='p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500'
            src={pp}
            width={45}
            height={45}
            alt='Bordered avatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
