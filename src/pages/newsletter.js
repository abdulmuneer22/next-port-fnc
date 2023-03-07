import React from 'react';
const Newsletter = () => {
    return (
        <div className='flex flex-wrap bg-black rounded-2xl p-6 mt-6'>
          <span className='flex w-full text-white justify-center'>Sign up for Special Offers and Promotions</span>
          <div className='flex w-full justify-between flex-col 2md:flex-row'>
            <div className='2md:w-9/12 flex justify-between flex-col 2md:flex-row'>
              <div className="2md:w-6/12 flex rounded-lg overflow-hidden mt-4 2md:mr-4">
                <i class="fas fa-envelope w-10 h-10 bg-gray-200 flex items-center justify-center text-p- border-r border-gray-400"></i>
                <input className='flex h-10 w-full pl-3 outline-none text-sm' placeholder='Email Address'></input>
              </div>
              <div className="2md:w-6/12 flex rounded-lg overflow-hidden mt-4 2md:mr-4">
                <i class="fas fa-mobile-screen w-10 h-10 bg-gray-200 flex items-center justify-center text-p- border-r border-gray-400"></i>
                <input className='flex h-10 w-full pl-3 outline-none text-sm' placeholder='Mobile Number'></input>
              </div>
            </div>
            <button className='2md:w-3/12 h-10 mt-4 bg-white rounded-lg uppercase font-bold'>Sing Up</button>
          </div>
        </div>
    )
}
export default Newsletter;