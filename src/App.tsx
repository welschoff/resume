import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;
