import React, { useState } from 'react';

const UpdateServices = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };
  

  return (
    <div className="h-screen bg-slate-100 flex flex-col items-center">
      <h1 className='text-5xl font-bold border text-center'>Create Services</h1>

      <form action="" className="w-full md:w-1/2 lg:w-full rounded-md p-4 bg-slate-50 shadow-lg mx-auto my-8">
        {currentSection === 1 && (
          <>
            <h1 className='border text-center text-3xl font-bold'>Section 1</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
              <input type="text" id="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="sub-heading" className="block text-gray-700 text-sm font-bold mb-2">Sub-Heading</label>
              <input type="text" id="sub-heading" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Services Description</label>
              <input type="text" id="description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
              <input type="file" id="image" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button>
            </div>
          </>
        )}

        {currentSection === 2 && (
          <>
            <h1 className='border text-center text-3xl font-bold'>Section 2</h1>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input type="text" id="title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <input type="text" id="description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className='border p-6 shadow-md'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 1</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 1</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 1</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>


            <div className='border p-6 shadow-md mt-6'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 2</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 2</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 2</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>

            <div className='border p-6 shadow-md mt-6'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 3</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 3</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 3</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>


          
            <div className="flex justify-between p-4 mt-4">
              <button type="button" onClick={handlePrevious} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Previous</button>
              <button type="submit"   onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Next</button>
            </div>
          </>
        )}


        {currentSection === 3 && (
          <>
            <h1 className='border text-center text-3xl font-bold'>Section 3x</h1>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input type="text" id="title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <input type="text" id="description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className='border p-6 shadow-md'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 1</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 1</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 1</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>


            <div className='border p-6 shadow-md mt-6'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 2</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 2</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 2</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>

            <div className='border p-6 shadow-md mt-6'> {/* HOuses the options */}
            
            <div className="mb-4"> 
              <label htmlFor="option1" className="block text-gray-700 text-sm font-bold mb-2">Option 3</label>
              <input type="text" id="option1" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />

              <div className='flex border justify-between mt-3 pt-3'> {/* Closes the flex for the options */}
            <div className="mb-4 w-[45%]  h-full">
              <label htmlFor="option1-title" className="block text-gray-700 text-sm font-bold mb-2">Title for Option 3</label>
              <input type="text" id="option1-title" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="option1-description" className="block text-gray-700 text-sm font-bold mb-2">Description for Option 3</label>
              <input type="text" id="option1-description" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" />
            </div>
            </div> {/* Closes the flex for the options */}
            </div> {/* Closes the options */}

            </div>


          
            <div className="flex justify-between p-4 mt-4">
              <button type="button" onClick={handlePrevious} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Previous</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateServices;
