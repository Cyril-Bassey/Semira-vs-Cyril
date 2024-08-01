import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-white h-[80px] top-0 flex justify-around border-b-2'>
        <div id='Logo' className='border border-white w-[30%] flex justify-center items-center'>
          <img src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" className='w-[100px] h-auto sm:w-[150px] sm:h-[30px] lg:w-[200px] lg:h-[40px]' />
        </div>
        <div className='hidden lg:block lg:border border-white content-center lg:w-[35%]'>
            <ul className='flex justify-between w-[100%]'>
              <li className='hover:text-[#FF6600] hover:cursor-pointer text-[18px]'>
                Home
              </li>
              <li className='hover:text-[#FF6600] hover:cursor-pointer text-[18px]'>
                About
              </li>
              <li className='hover:text-[#FF6600] hover:cursor-pointer text-[18px]'>
                Properties
              </li>
              <li className='hover:text-[#FF6600] hover:cursor-pointer text-[18px]'>
                Blog
              </li>
              <li className='hover:text-[#FF6600] hover:cursor-pointer text-[18px]'>
                Contact
              </li>
            </ul>
        </div>
            <div className='hidden lg:w-[20%] lg:flex  lg:items-center lg:justify-around'>
              <div className='flex justify-center items-center w-[50%] ' >
              <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" className='h-6 w-6'/>
              <p className='hidden lg:border lg:border-white lg:w-[90px] lg:flex lg:items-center'>
                English <span><IoMdArrowDropdown /></span>
              </p>
              </div>
              <button className='bg-[#FF6600] rounded-lg w-24 h-12 text-white hover:bg-[#773d17] font-semibold'>
                Login
                </button>              

            </div>
      </div>
    </>
  )
}

export default Navbar
