import Image from 'next/image';
import React from 'react';
import banner from '../images/banner.jpg';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.webp';
import g3 from '../images/g3.png';
import g4 from '../images/g4.jpg';

import data from '../data';

function Banner() {
  const { products } = data;
  return (
    <div className='flex gap-5 overflow-hidden'>
      <Image src={banner} width={400} />
      <Image src={g4} width={400} />
      <Image src={g2} width={400} />
      <Image src={g3} width={400} />
      <Image src={g1} width={400} />
      
    </div>
  );
}

export default Banner;
