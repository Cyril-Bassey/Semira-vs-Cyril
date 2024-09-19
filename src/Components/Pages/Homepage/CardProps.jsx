import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const CardProps = ({ slanttext, title, text }) => {
  return (
    <div className='card-wrapper shadow-lg rounded-md w-full h-auto sm:h-[270px] flex flex-col card items-center justify-center'>
      <div className=' card-content p-4 flex flex-col justify-center '>
        <p></p>

      {/* Slanted Text */}
      <span className='slant-text px-4 sm:px-8 bg-[#90902b] mb-2 font-lato'>
        <p className='text-xs sm:text-sm text-black '>{slanttext}</p>
      </span>
      

      {/* Title */}
      <h3 className='text-lg sm:text-xl font-bold text-[#90902b] font-montserrat mt-7'>{title}</h3>

      {/* Description Text */}
      <p className='text-sm sm:text-md text-gray-300 mt-2 flex-grow font-montserrat'>{text}</p>

      {/* Arrow Icon */}
      <div className=' hidden lg:flex justify-center '>
        <p className='arrow-container w-fit p-3 border border-[#90902b] rounded-full'>
          <FaArrowRight className='arrow text-xl sm:text-2xl text-[#90902b]'/>
        </p>
      </div>
    </div>
    </div>
  );
}

export default CardProps;
