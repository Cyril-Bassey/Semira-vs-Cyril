import React from "react";
import { Carousel } from "antd";
import square from "../../../images/Square.jpg"



const CarouselSlide = () => (
  <>
       <div className="w-full p-5 md:mt-8">
          <div className="bg-white grid md:flex items-center h-screen p-5">
          <div className="w-full md:w-2/4 text-start">
          <h1 className="text-3xl md:text-5xl font-bold"> Heading </h1>
          <h1 className="text-md md:text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Autem perspiciatis et fugiat cupiditate aspernatur nemo! </h1>
        </div>

        <div className="w-full md:w-2/4">
        <img src={square} className="w-10/12 rounded" alt="" />
        </div>
          </div>
    </div>  
  </>
);
export default CarouselSlide;
