import React from 'react';

const KnowledgeSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 flex flex-col items-center w-screen justify-center ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Expand your sales and marketing knowledge
      </h2>
     
      <div className="lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Blog Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Blog</h4>
          <img
            src="https://via.placeholder.com/80"
            alt="Robotic Arm"
            className="w-full h-auto rounded-md mb-4"
          />
          <ul className="list-none space-y-2">
            <li className="border-b pb-2 hover:text-yellow-600 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit</li>
            <li className="border-b pb-2 hover:text-yellow-600 hover:underline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
            <li className='hover:text-yellow-600 hover:underline'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Lorem </h4>
          <img
            src="https://via.placeholder.com/80"
            alt="Podcast"
            className="w-full h-auto rounded-md mb-4"
          />
          <ul className="list-none space-y-2">
            <li className="border-b pb-2 hover:text-yellow-600 hover:underline">Lorem ipsum dolor: Lorem ipsum dolor</li>
            <li className="border-b pb-2 hover:text-yellow-600 hover:underline">Lorem ipsum dolor</li>
            <li className='hover:text-yellow-600 hover:underline '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Community</h4>
          <img
            src="https://via.placeholder.com/80"
            alt="Community"
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi. Eos nesciunt nulla eveniet maxime accusamus velit rerum repudiandae voluptatem voluptates repellendus, 
          </p>
          <a href="/join" className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Join now
          </a>
        </div>

      </div>
    </section>
  );
};

export default KnowledgeSection;
