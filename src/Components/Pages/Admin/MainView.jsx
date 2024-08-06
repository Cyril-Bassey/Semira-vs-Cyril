import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UpdateServices from './AdminPages/UpdateServices';

const Home = () => <div>Home Page</div>;
const Page1 = () => <div>Page 1</div>;
// const Page2 = () => <div>Page 2</div>;
const Page3 = () => <div>Page 3</div>;

const MainContent = () => {
  return (
      <div className="flex-1 p-4">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/services" element={<UpdateServices />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default MainContent;