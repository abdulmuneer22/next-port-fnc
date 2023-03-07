import React, { useEffect, useState } from 'react';
import './Login.scss';
import Filters from "./filter";
import Product from "./product";
import Pagination from "./pagination";
import Newsletter from "./newsletter";
import FooterLinks from "./footerlinks";
import Social from "./social";
import Card from "./card";
import Footer from "./footer";
import landing_background from '../assets/images/landing_background.webp';
import product1 from '../assets/images/product1.webp';
import product2 from '../assets/images/product2.webp';
import product3 from '../assets/images/product3.webp';
import product4 from '../assets/images/product4.jpg';
import product5 from '../assets/images/product5.jpg';
import product6 from '../assets/images/product6.webp';
import product7 from '../assets/images/product7.jpg';
import product8 from '../assets/images/product8.jpg';
import product9 from '../assets/images/product9.jpg';
  const Login = () => {
    const Users=[
      {src:product1},
      {src:product2},
      {src:product3},
      {src:product4},
      {src:product5},
      {src:product6},
      {src:product7},
      {src:product8},
      {src:product9},
    ]
    const filterToggle=()=>{
      var x = document.getElementById("filterMain");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  return (
    <section className='font-Helvetica'>
      <div className='2md:w-960 w-full m-auto'>
        <div className='flex text-xs border-b border-gray-200 pt-3 pb-3'>
          <a className='text-p' href='#'>Home</a>&nbsp;/&nbsp;<a className='text-p' href='#'>Fragrances</a>&nbsp;/&nbsp;<span>Gianni Versace</span> 
        </div>
        <span className='flex text-2xl pt-3 pb-3'>Perfume & Cologne</span>
        <div className='flex justify-between border-b border-gray-200 pb-2 ml-2 mr-2 sm:flex-row flex-col'>
          <span className='flex font-bold text-p uppercase'>13159 Items found</span>
          <div className='flex items-center'>
            <span className='font-bold hidden sm:flex text-p uppercase mr-2'>Sort By</span>
            <button onClick={()=>filterToggle()} className='text-sm h-7 flex bg-p w-6/12 text-white justify-center items-center mr-4 sm:hidden'><i className='fas fa-filter'></i>&nbsp;Filters</button>
            <select className='text-sm sm:pl-1 pl-2 h-7 sm:w-32 outline-none sm:rounded sm:border sm:bg-transparent sm:text-gray-900 sm:border-gray-400 flex bg-p w-6/12 text-white'>
              <option>Review Count</option>
              <option>New Arrivals</option>
              <option>Top Sellers</option>
              <option>Product</option>
              <option>Brand Name</option>
              <option>Star Rating</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap mr-2 ml-2 sm:mr-0 sm:ml-0'>
          <Filters />
          <div className='w-760 sm:ml-2 flex flex-col'>
            <img className='w-full mt-3 hidden md:block' src={landing_background}></img>
            <div className='flex flex-wrap'>
            {Users.map((e)=>{
       return (
        <Product src={e.src} />
     );})}
            
            </div>
              <Pagination />
          </div>
        </div>
        <Newsletter />
        <FooterLinks />
        <Social />
      </div>
        <Card />
        <Footer />
    </section>
  )
}
export default Login;