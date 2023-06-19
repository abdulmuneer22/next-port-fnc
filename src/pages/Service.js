import React, { useEffect, useState } from 'react';
import './Login.scss';
import orders from '../assets/images/shoppingbag_purple-svg.webp';
import account from '../assets/images/account.webp';
import rewards from '../assets/images/rewards.456x456.png';
import pl from '../assets/images/pl.webp';
import reminders from '../assets/images/reminders.webp';
import gift from '../assets/images/gift.webp';
const Service = (props) => {
    return (
        <section className='font-Helvetica'>
          <div className='2md:w-960 w-full m-auto'>
            <div className='flex text-xs border-b border-gray-200 pt-3 pb-3'>
              <a className='text-p' href='#'>Home</a>&nbsp;/&nbsp;<span>My Account</span> 
            </div>
            <div className='flex flex-wrap'>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={orders}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Orders</span>
                    <span className='text-pDark flex text-xs'>Track and view current and past orders</span>
                </a>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={account}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Account Info</span>
                    <span className='text-pDark flex text-xs'>View and edit your personal profile information</span>
                </a>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={rewards}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Purpl Rewards</span>
                    <span className='text-pDark flex text-xs'>Learn more about Purpl Rewards </span>
                </a>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={pl}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Subscription Club</span>
                    <span className='text-pDark flex text-xs'>Manage your fragrance subscriptions</span>
                </a>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={reminders}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Reminders</span>
                    <span className='text-pDark flex text-xs'>View and edit your reminders</span>
                </a>
                <a href='#' className='pt-6 pb-6 flex w-full md:w-6/12 lg:w-4/12 flex-col items-center'>
                    <img className='h-14' src={gift}></img>
                    <span className='text-pDark flex mt-3 mb-1 h-6 font-bold text-xl'>Gift Cards</span>
                    <span className='text-pDark flex text-xs'>Buy or check your balance</span>
                </a>
            </div>
          </div>
        </section>
    )
}
export default Service;