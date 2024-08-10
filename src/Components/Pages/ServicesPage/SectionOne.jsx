import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../Redux/Actions";

const ServicesParameters = () => {
  const { id } = useParams();
  // const [details, setDetails] = useState([]);  
  const { data: details, } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [singlePage, setSinglePage] = useState({});

  // Fetch data on mount if not already in Redux store
  useEffect(() => {
    if (details.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, details.length]);

  useEffect(() => {
    if (details && details.length > 0) {
      const findDetails = details.find((data) => data.id === id);
      setSinglePage(findDetails);
    }
  }, [details, id]);

  return (

    <div>
      {/* <Navbar /> */}
      <div className="w-full h-screen flex flex-wrap">
        <div className="w-full h-full flex">
          <div className="w-full p-28 lg:w-1/2 lg:h-full lg:p-16">
            <h2 className="text-base lg:text-lg text-[#FF5E00] font-semibold">{singlePage?.name}</h2>
            <h1 className='text-4xl lg:text-5xl pt-5 font-bold lg:leading-tight'>{singlePage?.sub_heading}</h1>
            <p className='text-lg pt-4'>{singlePage?.description}</p>
            <button className='bg-[#FF5E00] hover:bg-[#ff5e00b3] rounded-lg p-4 px-5 mt-5 text-white font-bold w-auto flex items-center'>{singlePage?.button_text} <span className='ml-4 text-lg font-bold'><IoIosArrowForward /></span></button>
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:p-6 ">
            <img className="w-full" src={singlePage?.image} alt={singlePage?.name} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServicesParameters;
