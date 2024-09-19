import React from 'react';

const CaseStudyCard = ({ imageUrl, title, appointments, dealValue, summary, caseStudyUrl }) => {
  return (
    <div className="flex flex-col  md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-6">
        <h3 className="text-xl text-gray-300 font-semibold mb-2 font-montserrat">{title}</h3>
        <p className="text-gray-300 mb-4 font-montserrat">{summary}</p>
        <div className="flex justify-between mb-4">
          <div>
            <span className="text-[#FFFF00] font-bold text-lg font-montserrat">{appointments}</span>
            <p className="text-sm text-gray-300 font-montserrat">Appointments</p>
          </div>
          <div>
            <span className="text-[#FFFF00] font-bold text-lg font-montserrat">{dealValue}</span>
            <p className="text-sm text-gray-300 font-montserrat">Deal Size</p>
          </div>
        </div>
        <button
          onClick={() => window.location.href = caseStudyUrl}
          className="bg-[#90902b] text-white px-4 py-2 rounded-lg"
        >
          Read the case study
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
