import React from 'react';

const CaseStudyCard = ({ imageUrl, title, appointments, dealValue, summary, caseStudyUrl }) => {
  return (
    <div className="flex flex-col  md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full  p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{summary}</p>
        <div className="flex justify-between mb-4">
          <div>
            <span className="text-orange-500 font-bold text-lg">{appointments}</span>
            <p className="text-sm text-gray-600">Appointments</p>
          </div>
          <div>
            <span className="text-orange-500 font-bold text-lg">{dealValue}</span>
            <p className="text-sm text-gray-600">Deal Size</p>
          </div>
        </div>
        <button
          onClick={() => window.location.href = caseStudyUrl}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Read the case study
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
