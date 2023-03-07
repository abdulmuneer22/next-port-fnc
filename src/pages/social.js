import React from 'react';
import Coupons from '../assets/images/Coupons.webp';
import Facebook from '../assets/images/Facebook.webp';
import Instagram from '../assets/images/Instagram.webp';
import Pinterest from '../assets/images/Pinterest.webp';
import TikTok from '../assets/images/TikTok.webp';
import Twitter from '../assets/images/Twitter.webp';
import YouTube from '../assets/images/YouTube.webp';
const Social = () => {
    return (
        <div className='flex justify-around'>
          <a className='mt-6' href='#'><img className='w-12' src={Coupons}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={Facebook}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={Instagram}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={YouTube}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={Twitter}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={Pinterest}></img></a>
          <a className='mt-6' href='#'><img className='w-12' src={TikTok}></img></a>
        </div>
    )
}
export default Social;