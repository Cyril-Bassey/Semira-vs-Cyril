import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const CardProps = ({slanttext, title, text}) => {
  return (
    <div className='bg-white shadow-md rounded-md card p-4 w-[250px] h-[270px] '>
        <span className='slant-text px-8 bg-red-400'><p className=''>{slanttext}</p></span>
        <h3 className='title text-xl font-bold'>{title}</h3>
        <p className='text-md text-gray-600'>{text}</p>
        <p className='arrow-container my-5 w-fit p-3 border rounded-full'> <FaArrowRight className='arrow text-2xl'/></p>
    </div>
  )
}

export default CardProps