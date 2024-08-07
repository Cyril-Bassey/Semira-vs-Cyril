import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosAddCircle } from 'react-icons/io';


const Sidebar = () => {
    return (
        <div>
            <div className="w-64 h-screen bg-gray-800 text-white overflow-auto flex flex-col sticky top-[0px] left-0 ">
                <div className="flex-shrink-0 px-4 py-4 ">
                    <h2 className="text-3xl font-semibold border">Admin </h2>
                </div>
                <nav className="flex-1 px-4 space-y-2 border mt-7">
                    <h1>MENU</h1>
                    <Link to="/Admin" className=" block px-2 py-1 rounded hover:bg-gray-700"><span className=''><MdOutlineDashboard /></span><p>DASHBOARD</p>
                    </Link>
                    <Link to="/admin/addservices" className=" block  px-2 py-1 rounded hover:bg-gray-700"><span><IoIosAddCircle /></span><p>Add Services </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Blog Posts </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Comments </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Contacts </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Case Study </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Users </p></Link>
                    <Link to="/admin/page2" className=" block px-2 py-1 rounded hover:bg-gray-700"><span></span><p>Settings </p></Link>
                    {/* <Link to="/admin/page3" className="block px-2 py-1 rounded hover:bg-gray-700">Page 3</Link> */}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;