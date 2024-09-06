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
                    Join the Building Young Believers Community
                    </h1>
                    <div className='w-full  flex justify-center p-4'>
                        <p className='text-white text-lg w-[35%] text-center'>
                         Receive monthly newsletters written to strengthen and inspire you in the faith. 
                        </p>
                    </div>
                    <button className='bg-[#FF5E00] hover:bg-[#FF5E00b3] rounded-lg p-4 px-5 mt-5 text-white font-bold w-auto flex items-center'> Click Here To Join<span className='ml-4 text-lg font-bold'><IoIosArrowForward /></span></button>
                </div>
                <div className='bg-[#373737] border border-white rounded-lg w-[90%] mt-10 h-auto flex justify-around p-8'>
                    <div className='w-[50%] h-auto  border-r-2 items-center content-center p-5' >
                        <p className=' h- w-full flex text-white flex-col text-6xl font-extrabold mb-5 '>
                            Grow daily with the word
                        </p>
                        <p className=' h- w-full flex text-white flex-col text-xl '>
                       
                        </p>
                    </div>
             
                    <div className='w-[32%] h-auto' >
                        <p className=' h- w-full flex flex-col text-white '>
                        Get a daily customized bible plan carefully designed to help you grow in the knowledge of Christ and stay consistent with bible study.
                        </p>
                        <button className='bg-[#FF5E00] hover:bg-[#FF5E00b3] rounded-lg p-4 px-5 mt-5 text-white font-bold w-auto flex items-center'> Click Here To Download<span className='ml-4 text-lg font-bold'><IoIosArrowForward /></span></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
