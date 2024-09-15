import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/upperhand_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaTimes

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const [visibleServices, setVisibleServices] = useState(3); // Limit the number of visible services

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full bg-white h-[80px] top-0 flex justify-between items-center border-b-2 sticky z-50 px-4 lg:px-10">
        {/* Logo */}
        <div className="w-[20%] flex justify-center items-center">
          <NavLink exact to={'/'}>
            <img src={logo} alt="Logo" className="w-3/5" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:w-[50%]">
          <ul className="flex justify-between w-full">
            <li className="dropdown-container flex items-center text-black hover:text-[#FF6600] cursor-pointer text-[15px] relative">
              What we do
              <span className="ml-1"><IoMdArrowDropdown /></span>
              {/* Dropdown Menu */}
              <ul className="dropdown-menu absolute top-full left-0 flex w-[700px] bg-white shadow-lg rounded-md mt-2">
                <div className="w-[400px] border">
                  <li className="px-4 py-2 hover:bg-gray-200 border-b">
                    <Link to={"/appointment-Setting"}>Apointment Settings</Link>
                  </li>
                </div>
                <ul className="border w-[150px]">
                  <li className="px-4 py-2 hover:bg-gray-200">Service 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 3</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 4</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 5</li>
                </ul>
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 6</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 7</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 8</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 9</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Service 10</li>
                </ul>
              </ul>
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[15px]">
              Solutions <IoMdArrowDropdown />
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[15px]">
              Customer Success <IoMdArrowDropdown />
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[15px]">
              Learn <IoMdArrowDropdown />
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[15px]">
              Company <IoMdArrowDropdown />
            </li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[15px]">
              Pricing <IoMdArrowDropdown />
            </li>
          </ul>
        </div>

        {/* Book a Call Button */}
        <div className="hidden lg:block">
          <button className="bg-[#FF6600] rounded-lg w-[120px] h-10 text-white hover:bg-[#773d17] font-semibold text-[15px]">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden z-1000 bg-white fixed top-[80px] w-full left-0">
          <ul className="flex flex-col items-center bg-white shadow-lg rounded-md py-4">
            <NavLink exact to={"/"} onClick={toggleMobileMenu}>
              <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Home</li>
            </NavLink>
            <NavLink exact to={"/blog"} onClick={toggleMobileMenu}>
              <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Blog</li>
            </NavLink>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Podcast</li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Resources</li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Community</li>
            <li className="flex items-center hover:text-[#FF6600] cursor-pointer text-[16px]">Pricing</li>
            <button className="mt-4 bg-[#FF6600] rounded-lg w-[100px] h-10 text-white hover:bg-[#773d17] font-semibold text-[14px]">
              Book a Call
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
