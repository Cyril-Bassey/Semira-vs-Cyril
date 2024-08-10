import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Pages/Navbar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../Redux/Actions";

const ServicesParameters = () => {
  const { id } = useParams();
  // const [details, setDetails] = useState([]);  
  const { data: details,  } = useSelector((state) => state.data);
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
      <Navbar />
      <div className="w-full h-screen flex flex-wrap">
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full border border-blue-900 p-6">
            <h2 className="text-2xl font-bold">{singlePage?.name}</h2>
            <p>{singlePage?.sub_heading}</p>
            <p>{singlePage?.description}</p>
          </div>
          <div className="w-1/2 border border-red-800 p-6">
            <img className="w-full" src={singlePage?.image} alt={singlePage?.name} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServicesParameters;
