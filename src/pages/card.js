import React from 'react';
import spriteAmex from '../assets/images/spriteAmex.webp';
import spriteVisa from '../assets/images/spriteVisa.webp';
import spriteMastercard from '../assets/images/spriteMastercard.webp';
import spriteDiscover from '../assets/images/spriteDiscover.webp';
import pp from '../assets/images/pp.jpg';
import spriteAmazonPay from '../assets/images/spriteAmazonPay.webp';
import spriteAfterpay from '../assets/images/spriteAfterpay.webp';
import blueSeal from '../assets/images/blueSeal.png';
const Card = () => {
    return (
    <div className='flex w-full bg-gray-100 mt-10'>
        <div className='w-960 m-auto flex justify-center pt-4 pb-8 flex-wrap'>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteAmex}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteVisa}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteMastercard}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteDiscover}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={pp}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteAmazonPay}></img></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={spriteAfterpay}></img></a>
          <a className='ml-2 mr-2 mt-4 flex items-center' href='#'>Great&nbsp;<i class="text-sm text-green-500 fa-solid fa-star"></i><i class="text-sm text-green-500 fa-solid fa-star"></i><i class="text-sm text-green-500 fa-solid fa-star"></i><i class="text-sm text-green-500 fa-solid fa-star"></i><i class="text-sm text-green-500 fa-solid fa-star-half-stroke"></i></a>
          <a className='ml-2 mr-2 mt-4' href='#'><img className='h-8' src={blueSeal}></img></a>
        </div>
    </div>
    )
}
export default Card;