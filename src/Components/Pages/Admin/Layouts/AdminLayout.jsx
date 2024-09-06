import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';
// import AdminNavb from '../Components/AdminNavbar';
// import AdminNavbar from '../';


const AdminLayout = () => {
  return (

    <div className="flex flex-col min-h-screen">
    {/* <AdminNavbar />  */}
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default AdminLayout;