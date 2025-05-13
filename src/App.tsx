import './index.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Navbar from './navigation/Navbar';
import Router from './router/Router';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
