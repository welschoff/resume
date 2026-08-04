import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
