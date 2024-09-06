import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UpdateServices from '../Forms/UpdateServices';
// import UpdatePostForm from '../AdminPages/Forms/UpdateBlogPosts';
import SignUp from '../Forms/AddUser';
import UpdateBlog from '../Forms/UpdateBlogPosts';
import Posts from '../Forms/AllBlogPosts';
import EditBlog from '../Forms/EditBlogPostsCopy';

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
        <Route path="/updateBlog" element={<UpdateBlog />} />
        <Route path="/editBlog/:id" element={<EditBlog />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/add-user" element={<SignUp />} />
        <Route path="/blogposts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default MainContent;