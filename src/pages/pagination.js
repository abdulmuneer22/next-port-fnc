import React from 'react';
const Pagination = () => {
    return (
        <div className='flex sm:justify-end justify-center'>
            <a className='w-10 h-10 flex items-center justify-center border border-gray-200 mt-6 ml-2 bg-gray-600 text-white' href='#'><i className='fas fa-angles-left'></i></a>
            <a className='w-10 h-10 flex items-center justify-center border border-gray-200 mt-6 ml-2 bg-p text-white' href='#'>1</a>
            <a className='w-10 h-10 flex items-center justify-center border border-gray-200 mt-6 ml-2 hover:bg-gray-600 hover:text-white' href='#'>2</a>
            <a className='w-10 h-10 flex items-center justify-center border border-gray-200 mt-6 ml-2 hover:bg-gray-600 hover:text-white' href='#'>3</a>
            <a className='w-10 h-10 flex items-center justify-center border border-gray-200 mt-6 ml-2 hover:bg-gray-600 hover:text-white' href='#'><i className='fas fa-angles-right'></i></a>
        </div>
    )
}
export default Pagination;