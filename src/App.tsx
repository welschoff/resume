import './index.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './navigation/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
