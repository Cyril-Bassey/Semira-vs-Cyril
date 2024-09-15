import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="container mx-auto px-6 w-[90%] lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 px-4 space-y-6 text-center lg:text-left">
          <p className="text-orange-500  font-semibold">B2B appointment setting services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Appointments that turn into deals
          </h1>
          <p className="text-gray-600">
            Get around 20 meetings monthly with qualified, warmed-up leads.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold mt-6 hover:bg-orange-600 transition duration-300"
          >
            Get a quote
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          {/* Image */}
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-full">
            <img
              src="https://placehold.co/600x400"
              alt="Calendar placeholder"
              className="w-full rounded-lg shadow-lg"
            />

            {/* High priority badge */}
            <div className="absolute top-4 right-4 bg-white p-2 md:p-4 rounded-md shadow-md text-center">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-orange-500 text-sm md:text-base">★★★★★</span>
                <p className="text-gray-600 text-xs md:text-sm">High priority</p>
              </div>
            </div>

            {/* Calendar highlight */}
            <div className="absolute bottom-4 left-4 bg-white p-2 md:p-4 rounded-md shadow-md">
              <h3 className="font-bold text-gray-800 text-sm md:text-base">Calendar</h3>
              <div className="flex items-center space-x-2 mt-2">
                <div className="bg-orange-500 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center text-xs md:text-base">
                  1
                </div>
                <div className="text-gray-600 text-xs md:text-sm">Meeting with Digital Knights</div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="bg-orange-500 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center text-xs md:text-base">
                  2
                </div>
                <div className="text-gray-600 text-xs md:text-sm">Phone call with General Electric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
