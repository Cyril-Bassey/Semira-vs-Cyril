import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const CardProps = ({ slanttext, title, text }) => {
  return (
    <div className='bg-white shadow-md rounded-md p-4 w-full h-auto sm:h-[270px] flex flex-col card items-center justify-center'>
      {/* Slanted Text */}
      <span className='slant-text px-4 sm:px-8 bg-red-400 mb-2'>
        <p className='text-xs sm:text-sm'>{slanttext}</p>
      </span>

      {/* Title */}
      <h3 className='text-lg sm:text-xl font-bold'>{title}</h3>

      {/* Description Text */}
      <p className='text-sm sm:text-md text-gray-600 mt-2 flex-grow'>{text}</p>

      {/* Arrow Icon */}
      <div className='mt-4 flex justify-center'>
        <p className='arrow-container w-fit p-3 border rounded-full'>
          <FaArrowRight className='arrow text-xl sm:text-2xl'/>
        </p>
      </div>
    </div>
  )
}

export default CardProps;
