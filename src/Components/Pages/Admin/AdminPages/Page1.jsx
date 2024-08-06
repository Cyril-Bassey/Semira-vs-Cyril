import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex-shrink-0 px-4 py-4">
        <h2 className="text-lg font-semibold">My Sidebar</h2>
      </div>
      <h1>Page 1 ooo</h1>
      <nav className="flex-1 px-4 space-y-2">
        <Link to="/" className="block px-2 py-1 rounded hover:bg-gray-700">Home</Link>
        <Link to="/page1" className="block px-2 py-1 rounded hover:bg-gray-700">Page 1</Link>
        <Link to="/page2" className="block px-2 py-1 rounded hover:bg-gray-700">Page 2</Link>
        <Link to="/page3" className="block px-2 py-1 rounded hover:bg-gray-700">Page 3</Link>
      </nav>
    </div>
  );
};

export default Page1;