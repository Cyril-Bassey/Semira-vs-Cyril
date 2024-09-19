import React, { useState } from 'react';
import CaseStudyCard from './CaseStudyCards';

const Carousel = ({ caseStudies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" w-full p-6 overflow-hidden">
      <div className="hidden lg:flex items-center space-x-2 justify-end mb-4">
        <button
          className="  bg-[#90902b] hover:bg-[#FFFF00]  w-[50px] h-[50px] text-white flex justify-center items-center rounded-full shadow-md z-10"
          onClick={goPrev}
        >
          &lt;
        </button>
        <button
          className="  bg-[#90902b] hover:bg-[#FFFF00]  w-[50px] h-[50px] text-white flex justify-center items-center rounded-full shadow-md z-10"
          onClick={goNext}
        >
          &gt;
        </button>
      </div>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}  // show 2 cards at a time
      >
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="w-[80%] lg:w-[50%] pr-4 flex-shrink-0">  {/* Showing two cards */}
            <CaseStudyCard {...caseStudy} />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden items-center mt-5 space-x-2 justify-start mb-4">
        <button
          className="  bg-[#FFFF00]  w-[50px] h-[50px] text-white flex justify-center items-center rounded-full shadow-md z-10"
          onClick={goPrev}
        >
          &lt;
        </button>
        <button
          className="  bg-[#FFFF00]  w-[50px] h-[50px] text-white flex justify-center items-center rounded-full shadow-md z-10"
          onClick={goNext}
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Carousel;
