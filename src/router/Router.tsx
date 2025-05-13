import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition/Transition';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }
        />
        <Route
          path="/skills"
          element={
            <TransitionComponent>
              <Skills />
            </TransitionComponent>
          }
        />
        <Route
          path="/resume"
          element={
            <TransitionComponent>
              <Resume />
            </TransitionComponent>
          }
        />
        <Route
          path="/contact"
          element={
            <TransitionComponent>
              <Contact />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
