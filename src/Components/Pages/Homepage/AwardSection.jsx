import React from 'react';

const AwardsSection = () => {
  return (
    <div className="bg-gray-950 text-center p-10 md:p-20 flex flex-col md:flex-row justify-around w-full">
      {/* Left Side: Text and Reviews */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-montserrat text-gray-300 font-bold mb-4 w-full text-left">
          Lorem ipsum dolor
        </h1>
        <p className="text-sm text-gray-300 font-montserrat mb-8 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at
          nostrum maiores ab rerum a aperiam
        </p>

        {/* Review Scores */}
        <div className="flex flex-col md:flex-row justify-start w-full gap-4 md:gap-8 mb-8 font-montserrat text-gray-300">
          {/* Clutch */}
          <div className="text-sm ">
            <p className="font-semibold">Clutch / 4.9 score</p>
            <p>206 reviews</p>
          </div>

          {/* G2 */}
          <div className="text-sm">
            <p className="font-semibold">G2 / 4.9 score</p>
            <p>85 reviews</p>
          </div>

          {/* Upcity */}
          <div className="text-sm">
            <p className="font-semibold">Upcity / 5.0 score</p>
            <p>61 reviews</p>
          </div>
        </div>
      </div>

      {/* Right Side: Awards grid */}
      <div className="w-full md:w-[50%] mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Award 1 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="DesignRush award"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">Lorem ipsum dolor sit amet</p>
        </div>

        {/* Award 2 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="Stevie Award"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">
            2023 Stevie Winner <br /> Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Award 3 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="GoodFirms BPO award"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">Lorem ipsum dolor sit amet</p>
        </div>

        {/* Award 4 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="G2 Leader award"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">
            Leader <br /> Spring 2024
          </p>
        </div>

        {/* Award 5 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="Most Reviewed"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">Lorem ipsum dolor sit amet</p>
        </div>

        {/* Award 6 */}
        <div className="bg-gray-200 p-6 hover:bg-white rounded-lg shadow-md">
          <img
            src="https://placehold.co/400"
            alt="Clutch 1000"
            className="h-16 mx-auto"
          />
          <p className="mt-4 text-sm">
            Clutch 1000 <br /> 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
