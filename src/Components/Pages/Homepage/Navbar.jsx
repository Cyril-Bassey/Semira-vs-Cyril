import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../images/upperhand_logo.png"
import { FaBars } from 'react-icons/fa6';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const [visibleServices, setVisibleServices] = useState(3); // Limit the number of visible services

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <div className='w-full bg-white h-[80px] top-0 flex justify-around border-b-2 sticky z-50'>
        <div id='Logo' className='border border-white w-[20%] flex justify-center items-center'>
          <NavLink exact to={"/"}>
            <img src={logo} alt="" className='w-3/5' />
          </NavLink>
        </div>

        <div className='hidden lg:block lg:border border-white content-center lg:w-[45%]'>
          <ul className='flex justify-between w-[100%]'>
            <li className="dropdown-container flex items-center text-black hover:text-[#FF6600] cursor-pointer text-[15px]">
              What we do
              <span><IoMdArrowDropdown /> </span>
              <ul className="dropdown-menu flex w-[700px] bg-white shadow-lg rounded-md">
                <div className='w-[400px] border '>
                  <li  className="px-4 py-2 hover:bg-gray-200 border-b">
                  <Link to={"/appointment-Setting"}>
                  Apointment Settings
                  </Link>
                  </li>

                </div>
                <ul className='border w-[150px]'>

                  {/* {services.map((data) => (
                <Link key={data.id} to={`/services/${data.id}`}>
                <li className="px-4 py-2 hover:bg-gray-200">{data.id}</li>
                </Link>
              ))} */}
                  <li className="px-4 py-2 hover:bg-gray-200">Service 2 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 3 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 4 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 5 </li>
                </ul>
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 6 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 7 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 8 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 9 </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 10 </li>
                </ul>
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
        
        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isMobileMenuOpen ? <faTimes /> : <FaBars />} {/* Show FaTimes when open, FaBars when closed */}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden z-1000 top-[40px] bg-white sticky">
          <ul className="flex flex-col items-center z-50 w-full bg-white shadow-lg rounded-md">
            <NavLink exact to={"/"}>
              <li lassName="dropdown-container flex items-center hover:text-[#FF6600] cursor-pointer text-[16px] sm:text-[14px] md:text-[15px]">Home</li>
            </NavLink>
            <NavLink exact to={"/blog"}>
              <li className="dropdown-container flex items-center hover:text-[#FF6600] cursor-pointer text-[16px] sm:text-[14px] md:text-[15px]">Blog
              </li>
            </NavLink>
            <li lassName="dropdown-container flex items-center hover:text-[#FF6600] cursor-pointer text-[16px] sm:text-[14px] md:text-[15px]">Podcast</li>
            <li lassName="dropdown-container flex items-center hover:text-[#FF6600] cursor-pointer text-[16px] sm:text-[14px] md:text-[15px]">Resources</li>
            <li lassName="dropdown-container flex items-center hover:text-[#FF6600] cursor-pointer text-[16px] sm:text-[14px] md:text-[15px]">Community</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
