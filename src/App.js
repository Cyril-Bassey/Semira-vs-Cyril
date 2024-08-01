import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';


const App = () => {
    return (
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      </Router>
    );
};

export default App