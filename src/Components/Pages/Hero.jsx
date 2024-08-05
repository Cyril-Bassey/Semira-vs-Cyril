<<<<<<< HEAD:src/Components/Pages/HomePage/Hero.jsx
import React from 'react';
import Bubble from '../../../images/bubbles-png-11414.png';
import Popover from '../../../images/bubbles-png-11420.png';

const Hero = () => {
    return (
        <div className='h-screen w-full bg-[#F5F5F5] flex flex-col md:flex-row justify-between items-center p-4 md:p-0'>
            <div className='lg:w-[25%] lg:h-[100%]  hidden md:w-[20%] md:flex justify-center md:justify-start'>
                <img src={Bubble} className='object-cover bubble-animation  md:w-auto ' alt="" />
            </div>
            <div className='w-[50%]  md:w-[50%] text-center md:text-left my-4 md:my-0 border border-red-800'>
                <p className='text-lg md:text-xl text-[#FF6600] text-center font-bold'>
                    B2B LEAD GENERATION AGENCY
                </p>
                <h1 className='text-4xl text-center md:text-5xl lg:text-7xl font-bold mt-5'>
=======
import React from 'react'
import Bubble from '../../images/bubbles-png-11414.png'
import Popover from '../../images/bubbles-png-11420.png'

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
>>>>>>> aa35d699308359b7b1c1b6b0a031d4958b6b0985:src/Components/Pages/Hero.jsx
                    Close more deals
                    with ROI-focused
                    lead acquisition
                </h1>
                <p className='mt-5 md:mt-9 text-center text-lg'>
                    Belkins combines a result-oriented approach and industry-proven expertise to help you build a consistent and predictable sales channel.
                </p>
<<<<<<< HEAD:src/Components/Pages/HomePage/Hero.jsx
                <div className='mt-6 flex border justify-center'>
                    <button className='bg-[#FF6600] rounded-lg w-full md:w-[150px] h-12 md:h-14 text-white hover:bg-[#773d17] font-semibold'>
                        Get a Quote
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[20%] flex justify-center md:justify-end'>
                <img className='object-fill w-[150px] md:w-auto' src={Popover} alt="" />
=======
                <div className='flex justify-center text-center  mt-6'>
                <button className='bg-[#FF6600] rounded-lg w-full md:w-[150px] h-14 text-white hover:bg-[#773d17] font-semibold '>
                Get a Quote
                </button>  
                </div>
            </div>
            <div className='hidden md:block w-[20%] h-[100%]'>
                <img className='object-fill' src={Popover} alt="" />
>>>>>>> aa35d699308359b7b1c1b6b0a031d4958b6b0985:src/Components/Pages/Hero.jsx
            </div>
        </div>
    );
}

export default Hero;