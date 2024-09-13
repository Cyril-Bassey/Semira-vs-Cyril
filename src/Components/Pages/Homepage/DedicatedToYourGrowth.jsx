import React from 'react';

const GrowthSection = () => {
  return (
    <section className="bg-gray-50 py-16  lg:px-6 w-screen flex flex-col justify-center items-center">
      <div className="w-[80%]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga minima earum error dolores quasi adipisci saepe id eligendi nulla consequuntur, 
        </p>
        <a href="#learn-more" className="text-orange-500 font-semibold hover:underline">
          Learn more about us &rarr;
        </a>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5">
        {/* First row */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2">
          <img
            src="https://via.placeholder.com/600"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Second row */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Third row */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default GrowthSection;
