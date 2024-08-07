import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Pages/Navbar';

const ServicesParameters = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/All_Services')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDetails(json);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-wrap">
        {details.map((data) => (
          <div key={data.id} className="w-full h-full flex">
            <div className="w-1/2 h-full border border-blue-900 p-6">
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p>{data.sub_heading}</p>
              <p>{data.description}</p>
            </div>
            <div className="w-1/2 border border-red-800 p-6">
              <img className="w-full" src={data.image} alt={data.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesParameters;
