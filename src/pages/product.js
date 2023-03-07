import React from 'react';

const Product = (props) => {
    return (
        <div className='md:w-4/12 w-6/12 p-4 border-b border-gray-200'>
        <a href='#' className='flex flex-col items-center'><img className='md:w-full w-6/12' src={props.src}></img><span className='flex font-bold text-md underline justify-center mt-2'>D & G Light Blue</span></a>
            <span className='flex text-xs flex-col justify-center items-center text-gray-500'><span>by <a className='underline' href='#'>Dolce & Gabbana</a></span><span>eau de toilette</span></span>
            <span className='table bg-p text-white text-xs mt-1 pl-1 pr-1 m-auto'>women</span>
            <i className='flex text-xs flex-col justify-center mt-2 items-center text-gray-500'>6 sizes available</i>
            <span className='flex text-sm font-bold flex-col justify-center items-center text-p'>Up to 20% OFF</span>
            <span className='flex items-center justify-center mt-2'>
            <i className='text-yellow-400 text-sm fas fa-star'></i>
            <i className='text-yellow-400 text-sm fas fa-star'></i>
            <i className='text-yellow-400 text-sm fas fa-star'></i>
            <i className='text-yellow-400 text-sm fas fa-star'></i>
            <i className='text-yellow-400 text-sm fas fa-star-half-stroke'></i>
            <span className='text-xs ml-2 text-gray-400'>(117)</span>
            </span>
        </div>
    )
}
export default Product;