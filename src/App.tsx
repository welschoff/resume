import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './navigation/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import Slide from './components/SlideComponent/Slide';
import { useNavigationDirection } from './hooks/useNavigationDirection';

function AnimatedRoutes() {
  const location = useLocation();
  const direction = useNavigationDirection();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <Slide key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Slide>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
