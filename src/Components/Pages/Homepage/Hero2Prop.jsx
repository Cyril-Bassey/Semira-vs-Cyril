import React from 'react';
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
      <div className="bg-[#FBBE4D] rounded-full flex items-center justify-center w-20 h-20">
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
    <div className="h-[60vh] lg:h-[110vh]  bg-black text-white flex flex-col justify-between">
      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="text-4xl w-[80%] font-bold  text-white tracking-wide lg:text-[5rem] lg:w-[60%]">
          <p className='text-2xl tracking-wide mb-8 lg:my-3'>
            This is a title right here
            </p>
          <div 
          className="leading-tight ">
            Close more deals
            with ROI-focused
            lead acquisition
          </div>
        </div>
      </main>

      {/* Rotating Circle with Text */}
      <div 
      className="relative flex items-center justify-center mb-8 px-5">
        <p 
        className="text-lg w-[80%] space-x-2 lg:w-[40%] lg:mt-4 lg:text-2xl"
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
