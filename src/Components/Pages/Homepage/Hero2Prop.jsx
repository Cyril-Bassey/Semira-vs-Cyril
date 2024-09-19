import React from 'react';
import bg from "../../../images/bg.png"
// Reusable LearnMoreButton component with rotating text
const LearnMoreButton = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Rotating Text */}
      <svg viewBox="0 0 100 100" className="absolute  animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text fontSize="14" fill="#000" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0%">
            LEARN • MORE • LEARN • MORE •
          </textPath>
        </text>
      </svg>

      {/* Inner Yellow Circle */}
      <div className="bg-gradient-to-r from-[#90902b] to-[#FFFF00]  rounded-full flex items-center justify-center w-20 h-20">
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-[60vh] lg:h-[110vh] bg-gray-950 text-white flex flex-col justify-between ">


      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="text-4xl w-[80%] font-bold  flex flex-col justify-center items-center text-white tracking-wide lg:text-[5rem] lg:w-[60%]">
          <div className='relative  lg:w-[50%] lg:my-3 mb-8 group'>
            {/* <div className="absolute inset-0.5 bg-gradient-to-r from-[#FFFF00] opacity-75 to-[#90902b] rounded-lg blur group-hover:opacity-100 transition duration-1000"></div> */}

            <p className='text-sm lg:text-2xl relative tracking-wide w-[100%] bg-black px-3 py-3 rounded-lg group-hover:text-[#90902b] transition duration-200 font-lato text-gray-200'>
              This is a title right here
            </p>
          </div>

          <div className="leading-tight font-lato text-gray-300">
            Close more 
            <span 
            className="text-[#90902b]"
            style={{
              background: "linear-gradient(to right, #90902b, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            > deals</span> with
            <span className="text-yellow-400 font-lato"
            style={{
              background: "linear-gradient(to right, #FFFF00, #90902b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}> ROI-focused</span> lead acquisition
          </div>
        </div>
      </main>

      {/* Rotating Circle with Text */}
      <div
        className="relative flex items-center justify-center mb-8 px-5">
        <p
          className="text-sm w-[80%] space-x-2 lg:w-[40%] lg:mt-4 lg:text-xl font-lato text-gray-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, possimus reprehenderit. Aspernatur quae vel aperiam suscipit reprehenderit magni
        </p>
        <div
          className='hidden lg:block lg:w-[30%] border-t-2 mx-8'>
        </div>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default Header;
