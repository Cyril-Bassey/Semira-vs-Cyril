import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/Pages/Homepage/HomePage.jsx"
import 'flowbite';
import AdminLayout from './Components/Pages/Admin/Layouts/AdminLayout.jsx';
import MainContent from './Components/Pages/Admin/Layouts/MainView.jsx';
// import Page1 from './Components/Pages/Admin/AdminPages/Page1.jsx';
// import UpdateServices from './Components/Pages/Admin/AdminPages/UpdateServices.jsx';
import ServicesPage from './Components/Pages/BlogPage/Blog.jsx';
// import UpdatePostForm from './Components/Pages/Admin/AdminPages/UpdateBlogPosts.jsx';
import SignUp from './Components/Pages/Admin/Forms/AddUser.jsx';
import UpdateBlog from './Components/Pages/Admin/Forms/UpdateBlogPosts.jsx';
import Posts from './Components/Pages/Admin/Forms/AllBlogPosts.jsx';
import EditBlog from './Components/Pages/Admin/Forms/EditBlogPostsCopy.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<MainContent />} />
          {/* <Route path="page1" element={<Page1 />} /> */}
          {/* <Route path="addservices" element={<UpdateServices />} /> */}
          <Route path="updateBlog" element={<UpdateBlog />} />
          <Route path="editBlog/:id" element={<EditBlog />} />
          <Route path="blogposts" element={<Posts />} />
          <Route path="add-user" element={<SignUp />} />
        </Route>
        <Route path="/services/:title" element={<ServicesPage />} />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </Router>
  );
};

export default App;