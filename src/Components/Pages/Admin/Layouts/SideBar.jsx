import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome } from "react-icons/md";
import { IoIosAddCircle, IoIosBook, IoIosContact, IoIosCreate, IoIosFingerPrint, IoIosMicrophone, IoIosPersonAdd, IoMdArrowDropdown, IoMdBuild, IoMdPaper, IoMdPerson } from 'react-icons/io';


const Sidebar = () => {
    return (
        <div>
            <div className="w-64 h-screen bg-[#FF6600] text-white flex flex-col sticky top-[0px] left-0 ">
                <div className="flex-shrink-0 px-4 py-4 border-b">
                    <h2 className="text-3xl font-semibold">BYB Initiative</h2>
                    <h2 className="text-xl">Admin Panel</h2>
                    <Link to="/" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><p>View Website</p>
                    </Link>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-7">
                    <h1 className='text-2xl'>MENU LIST</h1>
                    <Link to="/Admin" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span className=''><MdOutlineHome /></span><p>DASHBOARD</p>
                    </Link>

                    <div className="dropdown-container  flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]">
                        <span><IoMdPaper /> </span>
                        <p>
                        Blog Posts
                        </p>
                        <span><IoMdArrowDropdown /> </span>
                        <ul className="dropdown-menu1 flex flex-col w-[200px] bg-white shadow-lg rounded-md">
                            <li className=" ">
                                <Link to="/admin/updateBlog" className='flex hover:border items-center space-x-2 px-2 py-1 rounded bg-whitehover:bg-[#FF6606] text-[#FF6606]'><span><IoIosAddCircle /></span>Add Blog Posts
                                </Link>
                            </li>
                            <li className=" ">
                                <Link to="/admin/editBlog" className='flex hover:border items-center space-x-2 px-2 py-1 rounded bg-whitehover:bg-[#FF6606] text-[#FF6606]'><span><IoIosFingerPrint /></span>Edit Blog Posts
                                </Link>
                            </li>
                            <li className=" ">
                                <Link to="/admin/updateBlog" className='flex hover:border items-center space-x-2 px-2 py-1 rounded bg-whitehover:bg-[#FF6606] text-[#FF6606]'><span><IoIosCreate /></span>Add Category
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="/admin/addservices" className=" flex hover:border items-center space-x-2  px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoIosMicrophone /></span><p>Add Sermon Links </p></Link>

                    <Link to="/admin/page2" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoIosBook /></span><p>Bible Study Plan </p></Link>

                    <Link to="/admin/blogposts" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoIosBook /></span><p>All Blog Posts </p></Link>


                    <Link to="/admin/page2" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoIosPersonAdd /></span><p>Comments </p></Link>

                    <Link to="/admin/page2" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoIosContact /></span><p>Contacts </p></Link>

                    <div className="dropdown-container  flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]">
                    <span><IoMdPerson /> </span>
                    <p>
                    Users
                    </p>
                    <span><IoMdArrowDropdown /> </span>
                    <ul className="dropdown-menu1 flex flex-col w-[200px] bg-white shadow-lg rounded-md">
                        <li className=" ">
                            <Link to="/admin/add-user" className='flex hover:border items-center space-x-2 px-2 py-1 rounded bg-whitehover:bg-[#FF6606] text-[#FF6606]'><span><IoIosAddCircle /></span>Add Users
                            </Link>
                        </li>
                        <li className=" ">
                            <Link to="/admin/add-user" className='flex hover:border items-center space-x-2 px-2 py-1 rounded bg-whitehover:bg-[#FF6606] text-[#FF6606]'><span><IoIosFingerPrint /></span>Edit Users
                            </Link>
                        </li>
                    </ul>
            </div>
            <Link to="/admin/page2" className=" flex hover:border items-center space-x-2 px-2 py-1 rounded hover:bg-[#FF6606]"><span><IoMdBuild /></span><p>Settings </p></Link>
        </nav>
            </div >
            
        </div >
    );
};

export default Sidebar;