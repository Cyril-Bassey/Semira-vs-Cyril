import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/Pages/Homepage/HomePage.jsx"
import 'flowbite';
import AdminLayout from './Components/Pages/Admin/AdminLayout';
import MainContent from './Components/Pages/Admin/MainView';
import Page1 from './Components/Pages/Admin/AdminPages/Page1.jsx';
import UpdateServices from './Components/Pages/Admin/AdminPages/UpdateServices.jsx';
import ServicesPage from './Components/Pages/ServicesPage/Services.jsx';
import AppointmentSettings from './Components/Pages/What We Do/AppointmentSettings.jsx';
import NotFoundPage from './Components/Pages/Homepage/NotFound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment-setting" element={<AppointmentSettings />} />
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<MainContent />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="addservices" element={<UpdateServices />} />
        </Route>
        < Route path="/services/:id" element={<ServicesPage />} />
        < Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;