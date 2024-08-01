import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/HomePage/Navbar';


const App = () => {
    return (
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </div>
      </Router>
    );
};

export default App