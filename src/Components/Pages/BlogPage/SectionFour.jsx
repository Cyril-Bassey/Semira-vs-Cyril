import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const SectionFour = () => {
    const style = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0.7) 100%), url(https://belkins.io/assets/bg-cta-stats-ftCfK6FL.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='border w-full h-auto p-6 flex justify-center'>
            <div className='h-auto w-[96%] mt-28 p-5 pb-20 rounded-3xl flex-col flex items-center justify-center' style={style}>
                <div className='w-[]  mt-10 flex flex-col justify-center items-center'>
                    <h1 className='text-6xl text-white text-center font-bold  w-[70%]'>
                        Get new opportunities
                        from LinkedIn regularly
                    </h1>
                    <div className='w-full  flex justify-center p-4'>
                        <p className='text-white text-lg w-[35%] text-center'>
                            with our complex LinkedIn outreach service
                            that solves your lead gen challenges.
                        </p>
                    </div>
                    <button className='bg-[#FF5E00] hover:bg-[#FF5E00b3] rounded-lg p-4 px-5 mt-5 text-white font-bold w-auto flex items-center'> Book A Call<span className='ml-4 text-lg font-bold'><IoIosArrowForward /></span></button>
                </div>
                <div className='bg-[#373737] border border-white rounded-lg w-[90%] mt-10 h-auto flex justify-around p-8'>
                    <div className='w-[32%] h-auto  border-r-2' >
                        <p className=' h- w-full flex text-white flex-col '>
                            200+
                            <span>
                                Opportunities yearly
                            </span>
                        </p>
                    </div>
                    <div className='w-[32%] h-auto  border-r-2' >
                        <p className=' h- w-full flex text-white flex-col'>200
                        <span>
                                Opportunities yearly
                            </span>
                        </p>
                    </div>
                    <div className='w-[32%] h-auto' >
                        <p className=' h- w-full flex flex-col text-white'>200
                        <span>
                                Opportunities yearly
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
