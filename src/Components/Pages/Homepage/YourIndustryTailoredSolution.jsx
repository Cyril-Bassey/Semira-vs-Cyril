import React from 'react';

const IndustriesSection = () => {
  return (
    <div className="text-white py-12 px-4 bg-gray-950 font-montserrat">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col items-center rounded-2xl text-center bg-gray-900 p-6 lg:py-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold ">
          Your industry <br />
          <span className="text-yellow-500">Our tailored solutions</span>
        </h2>
        {/* Subtitle */}
        <p className="text-base md:text-lg mt-4 w-full sm:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi necessitatibus nam, blanditiis sed facere autem aliquid porro.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gray-800 py-2 px-6 md:py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
            See all industries
          </button>
        </div>

        {/* Industry Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full font-montserrat">
          {/* Financial Services */}
          <div className="bg-gray-800 hover:bg-gray-600 p-4 md:p-6 rounded-lg flex items-center justify-center flex-col">
            <span className="text-3xl md:text-4xl">🏦</span>
            <p className="mt-2 md:mt-4 text-xs md:text-sm">Financial services</p>
          </div>

          {/* Healthcare */}
          <div className="bg-gray-800 hover:bg-gray-600 p-4 md:p-6 rounded-lg flex items-center justify-center flex-col">
            <span className="text-3xl md:text-4xl">💊</span>
            <p className="mt-2 md:mt-4 text-xs md:text-sm">Healthcare & pharmaceutical</p>
          </div>

          {/* Agencies */}
          <div className="bg-gray-800 hover:bg-gray-600 p-4 md:p-6 rounded-lg flex items-center justify-center flex-col">
            <span className="text-3xl md:text-4xl">🎯</span>
            <p className="mt-2 md:mt-4 text-xs md:text-sm">Agencies</p>
          </div>

          {/* Hardware Manufacturing */}
          <div className="bg-gray-800 hover:bg-gray-600 p-4 md:p-6 rounded-lg flex items-center justify-center flex-col">
            <span className="text-3xl md:text-4xl">⚙️</span>
            <p className="mt-2 md:mt-4 text-xs md:text-sm">Hardware manufacturing</p>
          </div>

          {/* Media Production */}
          <div className="bg-gray-800 hover:bg-gray-600 p-4 md:p-6 rounded-lg flex items-center justify-center flex-col">
            <span className="text-3xl md:text-4xl">🎬</span>
            <p className="mt-2 md:mt-4 text-xs md:text-sm">Media production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
