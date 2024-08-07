import React from 'react'
import logo1 from "../../../images/OIP (1).jpeg"
import logo2 from "../../../images/OIP.jpeg"

const Marquee = () => {
  return (
    <div className='h-[90px]'>
          <div className='flex logo-container gap-5 items-center content-center'>
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
            <img src={logo1} className='h-16' alt="" /> 
            <img src={logo2} className='h-16' alt="" />
          </div>
     </div>
  )
}

export default Marquee