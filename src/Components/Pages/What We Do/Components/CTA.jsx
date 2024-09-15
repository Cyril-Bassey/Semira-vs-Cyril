import React from 'react';
import CTASection from './CTA/CTAComponent';

const CTA = () => {
  const handleButtonClick = () => {
    window.location.href = '/schedule-call';  // Redirect to another page
  };

  const statsData = [
    { value: '200+', label: 'Opportunities yearly' },
    { value: '15%', label: 'Deal closing rate' },
    { value: '10:1', label: 'ROI achieved' },
  ];

  return (
    <div className="App">
      <CTASection 
        title="Excited to take on new clients?" 
        description="Identify and engage more leads using the best prospecting practices."
        stats={statsData}
        buttonText="Book a call"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default CTA;
