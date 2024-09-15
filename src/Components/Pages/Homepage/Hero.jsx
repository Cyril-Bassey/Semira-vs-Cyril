import React from 'react'
import Bubble from '../../../images/bubbles-png-11414.png'
import Popover from '../../../images/bubbles-png-11420.png'

const Hero = () => {
    return (
        <div className='h-screen  bg-[#101010] flex justify-between'>
            <div className='hidden md:block w-[20%] h-[100%]'>
                <img src={Bubble} className='object-cover bubble-animation' alt="" />
            </div>

            <div className='w-full p-5 text-center md:w-[50%] h-[100%] content-center block items-center'>  
                <p className='text-md md:text-xl text-[#ffff00] flex justify-center font-bold'>
                Lorem ipsum dolor
                </p>
                <h1 className='text-4xl md:text-7xl text-[#ffff00] font-bold text-center mt-5'>
                    Lorem ipsum dolor sit consecte consec sicing
                </h1>
                <p className='mt-5 md:mt-9 text-center text-lg text-[#ffff00]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto expedita quisquam exercitationem corporis sed?
                </p>

                <div className='flex justify-center text-center  mt-6'>
                <button className='bg-[#FF6600] rounded-lg w-full md:w-[150px] h-14 text-white hover:bg-[#773d17] font-semibold '>
                Get a Quote
                </button>  
                </div>
            </div>
            <div className='hidden md:block w-[20%] h-[100%]'>
                <img className='object-fill' src={Popover} alt="" />
            </div>
        </div>
    );
}

export default Hero;