import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-screen bg-[#F5F5F5] flex justify-between'>
            <div className='border border-blue-600 w-[20%] h-[100%]'></div>
            <div className='border border-blue-600 w-[50%] h-[100%] content-center block items-center'>
               
                <p className='text-xl text-[#FF6600] border flex justify-center font-bold'>
                    B2B LEAD GENERATION AGENCY
                </p>
                <h1 className='text-7xl font-bold text-center mt-5 border '>
                    Close more deals
                    with ROI-focused
                    lead acquisition
                </h1>
                <p className='flex justify-center text-center border mt-9'>
                Belkins combines a result-oriented approach and industry-proven expertise to help you build a consistent and predictable sales channel.
                </p>
                <div className='flex justify-center text-center border mt-6'>
                <button className='bg-[#FF6600] rounded-lg w-[150px] h-14 text-white hover:bg-[#773d17] font-semibold '>
                Get a Quote
                </button>  
                </div>
            </div>
            <div className='border border-blue-600 w-[20%] h-[100%]'></div>
        </div>
    )
}

export default Hero
