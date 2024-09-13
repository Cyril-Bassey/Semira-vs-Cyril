import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const SecSix = () => {
  return (
    <div className='p-10 md:p-20 bg-yellow-600 m-5 text-white flex flex-col md:flex-row items-center'>
      {/* Text Section */}
      <div className='w-full md:w-1/2 mb-8 md:mb-0'>
        <h1 className='text-3xl md:text-4xl font-bold'>What makes us your #1 Choice</h1>
        <p className='text-xl md:text-2xl mt-4'>Here's how we stand out among other lead generation agencies.</p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>
        <p className='flex gap-4 items-center text-lg md:text-xl mt-3'>
          <FaArrowRight className='text-lg md:text-xl text-green-600' /> Lorem ipsum dolor sit amet.
        </p>

        <button className='bg-white flex items-center justify-center rounded-lg w-full md:w-auto p-3 gap-2 mt-8 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold'>
          Let us talk <FaArrowRight className='text-2xl' />
        </button>
      </div>

      {/* Image Section */}
      <div className='w-full md:w-1/2'>
        <img
          src="https://belkins.io/assets/advantage-bg-o8Hdbbzj.webp"
          alt="Lead Generation"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default SecSix;
