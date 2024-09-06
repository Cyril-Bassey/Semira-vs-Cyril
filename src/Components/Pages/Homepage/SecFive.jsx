import React from 'react'
import blob from "../../../images/blob.jpeg"
import { FaArrowRight } from "react-icons/fa6";


const SecFive = () => {
const style ={
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.7) 100%), url(https://belkins.io/assets/industries-bg-Ye9cTnCR.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white'
  
}
  return (
    <>
        <div className='h-fit md:h-[80vh] p-5' >
            <div className='h-full p-5 content-center rounded-3xl' style={style}>
            <h1 className='text-4xl md:text-7xl font-extrabold text-white mb-3'>Our Podcasts</h1>
            <p className='text-white font-bold text-lg mb-4'>Our company offers services accross the following sectors</p>

            <div className='grid md:flex items-center gap-5 mt-12'>
                <div className='w-full md:w-[200px] h-[200px] bg-gray-600 content-center rounded-md card'>
                    <p className='text-white text-center text-xl font-bold'>Financial Services</p>
                </div>
                <div className='w-full md:w-[200px] h-[200px] bg-gray-600 content-center rounded-md card'>
                    <p className='text-white text-center text-xl font-bold'>Financial Services</p>
                </div>
                <div className='w-full md:w-[200px] h-[200px] bg-gray-600 content-center rounded-md card'>
                    <p className='text-white text-center text-xl font-bold'>Financial Services</p>
                </div>
                <div className='w-full md:w-[200px] h-[200px] bg-gray-600 content-center rounded-md card'>
                    <p className='text-white text-center text-xl font-bold'>Financial Services</p>
                </div>
                <div className='w-full md:w-[200px] h-[200px] bg-gray-600 content-center rounded-md card'>
                    <p className='text-white text-center text-xl font-bold'>Financial Services</p>
                </div>
                <button className='bg-[#FF6600] flex items-center rounded-lg w-auto md:w-[140px] p-3 gap-2  text-white hover:bg-[#773d17] font-semibold '>
                     See more  <FaArrowRight className='text-2xl'/>
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default SecFive