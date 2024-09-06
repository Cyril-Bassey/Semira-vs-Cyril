import React from 'react'
import Bubble from '../../../images/bubbles-png-11414.png'
import Popover from '../../../images/bubbles-png-11420.png'
import secOneImg  from "../../../images/secOne_Bg_Img.jpg"

const Hero = () => {
    const style ={
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0.7) 100%), url(${secOneImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
    }
    return (
        <div className='h-screen  flex justify-center  border-red-500 border' style={style}>
             
             
            {/* <div className='hidden md:block w-[20%] h-[100%]'>
                <img src={Bubble} className='object-cover bubble-animation' alt="" />
            </div> */}

            <div className='w-full p-5 text-center md:w-[70%] h-[100%] content-center flex flex-col justify-center items-center' >
                <p className='text-md md:text-xl text-[#FF6600] flex justify-center font-bold'>
                    OUR MISSION
                </p>
                <h1 className='text-4xl md:text-7xl font-bold text-white text-center mt-5 bubble-animation'>
                    To train young believers
                    and get them to mature
                    in Christ
                </h1>
                <p className='mt-3 md:mt-5 text-center text-lg text-white w-[60%]'>
                Building Young Believers Initiative is a platform that connects and supports the spiritual growth of young Christians from all over the world.
                </p>

                <div className='flex justify-center text-center  mt-6'>
                    <button className='bg-[#FF6600] rounded-lg w-full md:w-[auto] p-4 h-14 text-white hover:bg-[#773d17] font-semibold '>
                        Read More...
                    </button>
                </div>
            </div>
         
        </div>
    );
}

export default Hero;