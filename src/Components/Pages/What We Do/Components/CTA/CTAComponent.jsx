import React from 'react';

const CTASection = ({ title, description, stats, buttonText, onButtonClick }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="bg-black text-white rounded-xl w-[80%] sm:w-[70%] lg:w-[80%] p-12 flex flex-col lg:flex-row justify-between items-center shadow-lg">
        
        {/* Text Section */}
        <div className="lg:w-[35%] text-left mb-4 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg mb-4">{description}</p>
          <button 
            onClick={onButtonClick} 
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition-all duration-300"
          >
            {buttonText}
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="lg:w-1/2 flex justify-between border-2 bg-gray-900 p-6 rounded-lg mt-6 lg:mt-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center mx-4 ">
              <h3 className="lg:text-3xl font-bold lg:border-r">{stat.value}</h3>
              <p className=" text-xs lg:text-sm text-gray-400 lg:border-r">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
