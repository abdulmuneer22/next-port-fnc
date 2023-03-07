import React, { useEffect, useState } from 'react';
import footerBanner from '../assets/images/footerBanner.webp';
import ReactFlagsSelect from "react-flags-select";
const FooterLinks = () => {
    const [selected, setSelected] = useState("");
    return (
<div className='flex flex-col 2md:flex-row bg-gray-100 2md:bg-transparent pb-4 2md:pb-0 mt-4 2md:mt-0'>
          <div className='footerGrad 2md:w-4/12 mr-4 ml-4 2md:ml-0'>
            <span className='flex w-full border-b border-gray-200 items-center justify-center tracking-widest font-bold text-md pt-3 pb-3'>SHOP BY DEPARTMENT</span>
            <div className='flex flex-wrap'>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Fragrances</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">50% Off</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">For Kids</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Women's Perfume</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Samples</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Makeup</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Men's Cologne</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Skincare</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Candles</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Haircare</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Aromatherapy</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">New Arrivals</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Boutiques</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Best Sellers</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Mini</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Clearance</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Hard to Find</a>
            </div>
          </div>
          <div className='footerGrad 2md:w-4/12 mr-4 ml-4 2md:mr-0 2md:ml-0'>
            <span className='flex w-full border-b border-gray-200 items-center justify-center tracking-widest font-bold text-md pt-3 pb-3'>CUSTOMER SUPPORT</span>
            <div className='flex flex-wrap'>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Help</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Return Policy</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Wholesale Information</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Contact Us</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Security Pledge</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Affiliate Program</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">About Us</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Shipping Rates</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Sitemap</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">eGift Cards</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Accessibility Policy</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">100% Genuine</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Perfume Coupons</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Store Locator</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Careers</a>
            </div>
          </div>
          <div className='footerGrad 2md:w-4/12 ml-4 mr-4 2md:mr-0'>
            <span className='flex w-full border-b border-gray-200 items-center justify-center tracking-widest font-bold text-md pt-3 pb-3'>MY ACCOUNT</span>
            <div className='flex flex-wrap'>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">My Account</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Order Status</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Sign In</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Register Now</a>
            <a className='flex w-4/12 text-xs mt-2 pr-2 text-gray-500' href="#">Reminder Club</a>
            </div>
            <img src={footerBanner} className="w-full mt-4"></img>
            <div>
              <span className='flex text-xs mt-5'>Available stores</span>
              <ReactFlagsSelect countries={["US", "GB", "FR", "DE", "IT"]} customLabels={{ US: "United States", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }} placeholder="Select Language" selected={selected} onSelect={code => setSelected(code)} />
            </div>
          </div>
        </div>
    )
}
export default FooterLinks;