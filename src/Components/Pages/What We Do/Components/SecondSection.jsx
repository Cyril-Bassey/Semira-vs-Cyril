import React, { useState } from 'react';

const SectionTwo = () => {
  const style = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.7) 100%), url(https://belkins.io/assets/industries-bg-Ye9cTnCR.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="h-fit p-8 flex justify-center">
      <div className="w-full max-w-[1200px] mt-28 p-5 pb-20 rounded-3xl flex justify-center" style={style}>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center font-bold w-full md:w-[70%]">
            Get new opportunities from LinkedIn regularly
          </h1>
          <div className="w-full flex justify-center p-4">
            <p className="text-white text-lg md:text-xl w-full md:w-[60%] lg:w-[35%] text-center">
              with our complex LinkedIn outreach service that solves your lead gen challenges.
            </p>
          </div>

          <div className="w-full md:w-[90%] h-auto bg-[#1F1F1F] rounded-2xl mt-7 p-6 md:p-12 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center">
            <div className="w-full md:w-[50%] h-auto flex flex-col justify-center">
              {/* Radio Inputs */}
              <input
                type="radio"
                id="p1"
                name="paragraphs"
                value="option1"
                onChange={handleOptionChange}
                className="hidden peer"
              />
              <label
                htmlFor="p1"
                className={`block text-white text-lg md:text-xl p-4 cursor-pointer ${
                  selectedOption === 'option1' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : 'hover:border-l-2'
                }`}
              >
                Inadequate result from current prospecting strategy.
              </label>

              <input
                type="radio"
                id="p2"
                name="paragraphs"
                value="option2"
                onChange={handleOptionChange}
                className="hidden peer"
              />
              <label
                htmlFor="p2"
                className={`block text-white text-lg md:text-xl p-4 cursor-pointer ${
                  selectedOption === 'option2' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : 'hover:border-l-2'
                }`}
              >
                Poor engagement with your LinkedIn messages.
              </label>

              <input
                type="radio"
                id="p3"
                name="paragraphs"
                value="option3"
                onChange={handleOptionChange}
                className="hidden peer"
              />
              <label
                htmlFor="p3"
                className={`block text-white text-lg md:text-xl p-4 cursor-pointer ${
                  selectedOption === 'option3' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : 'hover:border-l-2'
                }`}
              >
                Hard to get prospects' attention.
              </label>
            </div>

            {/* Message Display */}
            <div className="border rounded-2xl bg-white w-full md:w-[50%] h-auto p-4 md:p-6 mt-4 md:mt-0">
              <div className="text-black text-base md:text-lg">
                {selectedOption === 'option1' && (
                  <div className="p-4">
                    <h1 className="text-lg md:text-xl font-bold mb-4">Put your solution in front of actual decision-makers</h1>
                    <p>We audit and update your profile, build a relevant network of ICP matches via personalized connection requests, and follow up with them to schedule appointments.</p>
                    <button className="rounded-2xl bg-[#FF5E00] p-3 mt-6 text-base font-semibold text-white">
                      Book a call
                    </button>
                  </div>
                )}
                {selectedOption === 'option2' && (
                  <div className="p-4">
                    <h1 className="text-lg md:text-xl font-bold mb-4">Start conversations that drive sales</h1>
                    <p>We craft thought-out LinkedIn message sequences proven to increase response rates and convert up to 15% of your prospects into paying customers.</p>
                    <button className="rounded-2xl bg-[#FF5E00] p-3 mt-6 text-base font-semibold text-white">
                      Book a call
                    </button>
                  </div>
                )}
                {selectedOption === 'option3' && (
                  <div className="p-4">
                    <h1 className="text-lg md:text-xl font-bold mb-4">Showcase your expertise on LinkedIn</h1>
                    <p>We help you cut through the clutter by combining powerful content strategies and consistent engagement to amplify your voice as a thought leader and attract the right clients.</p>
                    <button className="rounded-2xl bg-[#FF5E00] p-3 mt-6 text-base font-semibold text-white">
                      Book a call
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
