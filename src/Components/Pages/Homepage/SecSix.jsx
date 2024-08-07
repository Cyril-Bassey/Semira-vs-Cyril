import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const SecSix = () => {
  return (
    <div className='p-20 bg-orange-600 contents-center m-5 text-white flex items-center'>
       <div className='w-1/2'>
       <h1 className='text-4xl font-bold'>What makes us your #1 Choice</h1>
        <p className='text-2xl mt-4'>Here's how we stand out among other lead generation agencies.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <p className='flex gap-4 items-center text-xl mt-3'><FaArrowRight className='text-xl text-green-600'/> Lorem ipsum dolor sit amet.</p>
        <button className='bg-white flex items-center rounded-lg w-full md:w-fit p-3 gap-2 mt-8 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold '>
                    Let us talk <FaArrowRight className='text-2xl'/>
                </button>
       </div>
       <div className='w-1/2'>
        <img src="https://belkins.io/assets/advantage-bg-o8Hdbbzj.webp" alt="" />
       </div>
    </div>
  )
}

export default SecSix