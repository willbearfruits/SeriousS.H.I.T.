import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/Layout';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Instruments = lazy(() => import('./pages/Instruments'));
const InstrumentDetail = lazy(() => import('./pages/InstrumentDetail'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const Music = lazy(() => import('./pages/Music'));
const Teaching = lazy(() => import('./pages/Teaching'));
const Lab = lazy(() => import('./pages/Lab'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-void text-neon-red font-mono text-xl animate-pulse tracking-widest">
    LOADING_S.H.I.T...
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;