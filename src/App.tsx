import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { ElementType } from 'react';

const pageVariants = {
  initial: { opacity: 0, rotateY: 90, scale: 0.8 },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  const disableScrollbar = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScrollbar = () => {
    document.body.style.overflow = 'auto';
  };

  const AnimatePresenceFixedType = AnimatePresence as ElementType;

  return (
    <AnimatePresenceFixedType mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        onAnimationStart={disableScrollbar}
        onAnimationComplete={enableScrollbar}
      >
        <Navbar />

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresenceFixedType>
  );
};

const App = () => {
  return (
    <Router>
      <div style={{ perspective: '1000px' }}>
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
