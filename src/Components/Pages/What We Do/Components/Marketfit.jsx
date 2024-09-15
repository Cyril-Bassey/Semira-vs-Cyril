import React from 'react';

const MarketFitSection = () => {
  return (
    <section className="bg-white py-16 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">How appointment setting works</h1>
          <p className="text-md md:text-lg text-gray-500 mt-2">
            We’ve mastered each step of the process so you get ready-to-buy leads.
          </p>
        </div>
        
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:p-8 justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Market fit validation</h2>
            <h3 className="text-lg text-gray-600 mb-6">Testing hypothesis and validating your ideas</h3>

          {/* Graphic/Image For Phone Screen */}
          <div className="flex my-6 lg:w-1/2 w-full lg:hidden justify-center lg:justify-end">
            <img 
              src="https://placehold.co/600x400" 
              alt="Target Graphic" 
              className="w-3/4 lg:w-full object-contain"
            />
          </div>
            



            <ul className="space-y-4 mb-6">
              <li className="text-md md:text-lg text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2">→</span> 
                To test your new product or service potential, we agree upon channel, value prop, and messaging.
              </li>
              <li className="text-md md:text-lg text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2">→</span> 
                Next, we launch several campaigns to identify potential sales opportunities and schedule quick chats with them.
              </li>
              <li className="text-md md:text-lg text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2">→</span> 
                Our team analyzes responses and feedback to determine whether your offer resonates with potential customers.
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-transparent text-orange-500 border border-orange-500 py-2 px-6 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              <span className="font-semibold">Book a call</span>
              <span className="text-orange-500">→</span>
            </a>
          </div>

          {/* Graphic/Image */}
          <div className="hidden lg:w-1/2 w-full lg:flex justify-center lg:justify-end">
            <img 
              src="https://placehold.co/600x400" 
              alt="Target Graphic" 
              className="w-3/4 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketFitSection;
