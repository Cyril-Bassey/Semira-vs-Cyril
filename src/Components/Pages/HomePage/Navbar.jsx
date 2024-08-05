import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

  return (
    <>
      <div className='w-full bg-white h-[80px] top-0 flex justify-around border-b-2 sticky'>
        <div id='Logo' className='border border-white w-[20%] flex justify-center items-center'>
          <img src="https://belkins.io/assets/belkins-logo-light-UwcyCLNU.svg" alt="" className='w-[100px] h-auto sm:w-[150px] sm:h-[30px] lg:w-[200px] lg:h-[40px]' />
        </div>
        <div className='hidden lg:block lg:border border-white content-center lg:w-[45%]'>
          <ul className='flex justify-between w-[100%]'>

            
            <li className="dropdown-container  flex items-center text-black hover:text-[#FF6600] cursor-pointer text-[15px]">   
                What we do
                <span><IoMdArrowDropdown /> </span>
              <ul className="dropdown-menu w-48 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-gray-200">Service 1 </li>
                <li className="px-4 py-2 hover:bg-gray-200">Service 2 </li>
                <li className="px-4 py-2 hover:bg-gray-200">Service 3 </li>
              </ul>
              </li>

              <li className='flex items-center  hover:text-[#FF6600] hover:cursor-pointer text-[15px]'>
                Solutions
                <span><IoMdArrowDropdown /> </span></li>
              <li className='flex items-center  hover:text-[#FF6600] hover:cursor-pointer text-[15px]'>
                Customer Success
                <span><IoMdArrowDropdown /> </span></li>
              <li className='flex items-center  hover:text-[#FF6600] hover:cursor-pointer text-[15px]'>
                Learn
                <span><IoMdArrowDropdown /> </span></li>
              <li className='flex items-center  hover:text-[#FF6600] hover:cursor-pointer text-[15px]'>
                Company
                <span><IoMdArrowDropdown /> </span></li>
              <li className='flex items-center  hover:text-[#FF6600] hover:cursor-pointer text-[15px]'>
                Pricing
                <span><IoMdArrowDropdown /> </span></li>
          </ul>
        </div>
        <div className='w-[20%] flex  items-center justify-around '>
          <div className='flex justify-center items-center w-[50%] ' >
            {/* <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" className='h-6 w-6'/>
              <p className='border border-white w-[90px] flex items-center'>
                English <span><IoMdArrowDropdown /></span>
              </p> */}
            <button className='bg-[#FF6600] rounded-lg w-[100px] h-10 text-white hover:bg-[#773d17] font-semibold '>
              Book a call
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
