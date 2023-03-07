import React from 'react';
import sideBanner from '../assets/images/sideBanner.webp';
const filter = () => {
    const filterToggle1=()=>{
      var x = document.getElementById("genderFilter");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      var element = document.getElementById("filterBtn1");
      element.classList.toggle("fa-plus");
    }
    const filterToggle2=()=>{
      var x = document.getElementById("brandFilter");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      var element = document.getElementById("filterBtn2");
      element.classList.toggle("fa-plus");
    }
    return (
        <div className='w-full sm:w-182 filtersView mt-3 sm:flex hidden flex-col' id='filterMain'>
        <div className='border border-gray-200 flex flex-col w-full'>
          <span className='flex w-full h-20 bg-gray-100 items-center justify-center uppercase font-bold text-center text-p- border-b border-gray-200'>Refine Your Selection</span>
          <span onClick={()=>filterToggle1()} className='flex w-full bg-gray-100 items-center justify-between font-bold text-sm text-p p-3 cursor-pointer'>Gender <i id='filterBtn1' className='fas fa-minus'></i></span>
          <div id='genderFilter' className='flex flex-col'>
            <div className="flex items-center pt-1 pb-1 border-b border-gray-200 ml-2 mr-2">
              <input id="child" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
              <label htmlFor="child" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Childern <span>(45)</span></label>
            </div>
            <div className="flex items-center pt-1 pb-1 border-b border-gray-200 ml-2 mr-2">
              <input id="Men" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
              <label htmlFor="Men" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Men <span>(45)</span></label>
            </div>
            <div className="flex items-center pt-1 pb-1 border-b border-gray-200 ml-2 mr-2">
              <input id="Unisex" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
              <label htmlFor="Unisex" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Unisex <span>(45)</span></label>
            </div>
            <div className="flex items-center pt-1 pb-1 ml-2 mr-2">
              <input id="Women" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
              <label htmlFor="Women" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Women <span>(45)</span></label>
            </div>
          </div>
          <span onClick={()=>filterToggle2()} className='flex w-full bg-gray-100 items-center justify-between font-bold text-sm text-p p-3 border-t border-gray-200'>Brand <i id='filterBtn2' className='fas fa-minus'></i></span>
          <div id='brandFilter'>
            <span className='flex w-full items-center justify-center text-xs pt-2 pb-2'>Click a letter to find a fragrance</span>
            <div className='flex flex-wrap'>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">A</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">B</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">C</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">D</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">E</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">F</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">G</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">H</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">I</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">J</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">K</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">L</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">M</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">N</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">O</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">P</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">Q</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">R</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">S</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">T</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">U</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">V</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">W</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">X</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">Y</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">Z</a>
              <a href="#" className="flex align-center justify-center bg-gray-100 text-xs border border-gray-200 w-20c h-20c">#</a>
            </div>
            <div class="flex border border-gray-500 items-center h-8">
              <i class="fas fa-search w-8 text-center text-xs text-gray-500"></i>
              <input type="text" className='text-xs w-full h-8 border-none bg-transparent outline-none' placeholder="Find a brand"></input>
            </div>
            <div className="max-h-300 overflow-auto">
              <span className='flex w-full font-bold border-b border-gray-200 items-center justify-center text-sm pt-2 pb-2'>Featured Brands</span>
              <div className='flex flex-col'>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand1" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">D &amp; G Light Blue<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand2" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Versace Eros<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand3" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Obsession<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand4" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Cool Water<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand5" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand5" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Versace Dylan Blue<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand6" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand6" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Dior Sauvage<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand7" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand7" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Versace Bright Crystal<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand8" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand8" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Eternity<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand9" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand9" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">The One<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand10" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand10" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Ck One<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand11" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand11" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Acqua Di Gio<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand12" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand12" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Armaf Club De Nuit Intense<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand13" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand13" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Burberry Brit<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand14" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand14" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Paco Rabanne 1 Million<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand15" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand15" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Burberry Touch<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand16" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand16" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Mont Blanc Legend<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand17" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand17" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Jimmy Choo<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand18" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand18" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Viva La Juicy<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand19" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand19" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Euphoria<span className='ml-1'>(45)</span></label>
                </div>
                <div className="flex pt-1 pb-1 ml-2 mr-2 border-b border-gray-200">
                  <input id="brand20" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"></input>
                  <label htmlFor="brand20" className="ml-1 text-xs text-gray-900 flex justify-between w-full cursor-pointer hover:text-p">Versace Signature<span className='ml-1'>(45)</span></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-gray-200 mt-8'>
          <span className='text-p uppercase text-sm font-bold block pt-2 pb-2 text-center w-full'>JOIN OUR COUPON LIST</span>
          <input className='border border-gray-600 h-8 p-2 ml-2 mr-2 flex text-sm outline-none' placeholder='Email Address'></input>
          <button className='uppercase ml-2 mr-2 bg-gray-900 text-white text-sm mt-2 mb-2 h-7'>Sign Up</button>
        </div>
        <img className='w-full mt-4' src={sideBanner}></img>
      </div>
    )
}
export default filter;