import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

  return (
    <>
      <div className='w-full bg-white h-[80px] top-0 flex justify-around border-b-2 sticky z-50'>
        <div id='Logo' className='border border-white w-[20%] flex justify-center items-center'>
          <img src="https://belkins.io/assets/belkins-logo-light-UwcyCLNU.svg" alt="" className='w-[100px] h-auto sm:w-[150px] sm:h-[30px] lg:w-[200px] lg:h-[40px]' />
        </div>

        <div className='hidden lg:block lg:border border-white content-center lg:w-[45%]'>
          <ul className='flex justify-between w-[100%]'>

            
            <li className="dropdown-container flex items-center text-black hover:text-[#FF6600] cursor-pointer text-[15px]">   
                What we do
                <span><IoMdArrowDropdown /> </span>
              <ul className="dropdown-menu w-48 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-gray-200">Service 1 </li>
                <li className="px-4 py-2 hover:bg-gray-200">Service 2 </li>
                <li className="px-4 py-2 hover:bg-gray-200">Service 3 </li>
              </ul>
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[12px] sm:text-[14px] md:text-[15px]">Solutions<span><IoMdArrowDropdown /></span></li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[12px] sm:text-[14px] md:text-[15px]">Customer Success<span><IoMdArrowDropdown /></span></li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[12px] sm:text-[14px] md:text-[15px]">Learn<span><IoMdArrowDropdown /></span></li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[12px] sm:text-[14px] md:text-[15px]">Company<span><IoMdArrowDropdown /></span></li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[12px] sm:text-[14px] md:text-[15px]">Pricing<span><IoMdArrowDropdown /></span></li>
          </ul>
        </div>
        <div className="w-[20%] flex items-center justify-end pr-4">
          <button className="bg-[#FF6600] rounded-lg w-[80px] h-8 text-white hover:bg-[#773d17] font-semibold text-[10px] sm:w-[100px] sm:h-10 sm:text-[12px] md:w-[120px] md:h-12 md:text-[14px] lg:w-[100px] lg:h-10 lg:text-[15px]">Book a call</button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="mobile-menu-button">
            {/* Use an icon for the mobile menu button */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <ul className="flex flex-col items-center w-full bg-white shadow-lg rounded-md">
          <li className="px-4 py-2 hover:bg-gray-200">What we do</li>
          <li className="px-4 py-2 hover:bg-gray-200">Solutions</li>
          <li className="px-4 py-2 hover:bg-gray-200">Customer Success</li>
          <li className="px-4 py-2 hover:bg-gray-200">Learn</li>
          <li className="px-4 py-2 hover:bg-gray-200">Company</li>
          <li className="px-4 py-2 hover:bg-gray-200">Pricing</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
