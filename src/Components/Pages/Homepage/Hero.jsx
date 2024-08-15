import React from 'react'
import Bubble from '../../../images/bubbles-png-11414.png'
import Popover from '../../../images/bubbles-png-11420.png'

const Hero = () => {
    return (
        <div className='h-screen  bg-[#F5F5F5] flex justify-between'>
            <div className='hidden md:block w-[20%] h-[100%]'>
                <img src={Bubble} className='object-cover bubble-animation' alt="" />
            </div>

            <div className='w-full p-5 text-center md:w-[50%] h-[100%] content-center block items-center'>  
                <p className='text-md md:text-xl text-[#FF6600] flex justify-center font-bold'>
                    B2B LEAD GENERATION AGENCY
                </p>
                <h1 className='text-4xl md:text-7xl font-bold text-center mt-5'>
                    Close more deals
                    with ROI-focused
                    lead acquisition
                </h1>
                <p className='mt-5 md:mt-9 text-center text-lg'>
                    Belkins combines a result-oriented approach and industry-proven expertise to help you build a consistent and predictable sales channel.
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