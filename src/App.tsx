import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Resume from './pages/resume/Resume';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
