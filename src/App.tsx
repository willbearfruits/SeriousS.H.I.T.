import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Instruments from './pages/Instruments';
import InstrumentDetail from './pages/InstrumentDetail';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Music from './pages/Music';
import Teaching from './pages/Teaching';
import Lab from './pages/Lab';
import Contact from './pages/Contact';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/instruments/:id" element={<InstrumentDetail />} />
        <Route path="/products" element={<Instruments />} /> {/* Redirect/Alias */}
        <Route path="/products/:id" element={<InstrumentDetail />} /> {/* Redirect/Alias */}
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetail />} />
        <Route path="/music" element={<Music />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
