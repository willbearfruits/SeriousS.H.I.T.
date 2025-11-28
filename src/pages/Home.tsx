import React from 'react';
import Layout from '../components/Layout';
import AcronymGenerator from '../components/AcronymGenerator';
import KonamiCode from '../components/KonamiCode';
import { Link } from 'react-router-dom';
import { instruments } from '../data/content';

const Home: React.FC = () => {
  return (
    <Layout>
      <KonamiCode />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] relative overflow-hidden">
        
        {/* Central Glitch Brand */}
        <div className="w-full max-w-5xl text-center z-20 px-4">
            <h1 className="text-5xl md:text-8xl font-black text-neon-red mb-6 glitch-text hover:scale-105 transition-transform duration-300" data-text="SERIOUS S.H.I.T.">
                SERIOUS S.H.I.T.
            </h1>
            <div className="h-px w-24 bg-neon-red mx-auto mb-6"></div>
            <h2 className="text-sm md:text-xl tracking-[0.5em] text-gray-400 font-mono mb-12 animate-pulse">
                NOTHING IS HOLY
            </h2>
            
            <p className="text-lg md:text-2xl text-off-white max-w-3xl mx-auto font-mono leading-relaxed opacity-90">
                Interdisciplinary artist, noise-maker, and teacher building open-source instruments, performances, and tools for breaking sound and images.
            </p>
        </div>

        <div className="absolute bottom-10 w-full text-center z-20">
             <div className="animate-bounce text-neon-red text-2xl">↓</div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-b border-neon-red/20">
          {/* Instruments */}
          <Link to="/instruments" className="group relative h-80 border-r border-neon-red/20 bg-void overflow-hidden hover:bg-black transition-colors">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-3xl font-black text-white group-hover:text-neon-red transition-colors uppercase mb-2">Instruments</h3>
                  <div className="h-px w-0 bg-neon-red group-hover:w-16 transition-all duration-500"></div>
                  <p className="mt-4 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Fuzilator, Sus My BITx, Custom Hardware</p>
              </div>
              <img src={`${import.meta.env.BASE_URL}${instruments[0].image}`} alt="Instruments" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          </Link>

          {/* Works */}
          <Link to="/works" className="group relative h-80 border-r border-neon-red/20 bg-void overflow-hidden hover:bg-black transition-colors">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-3xl font-black text-white group-hover:text-neon-red transition-colors uppercase mb-2">Works</h3>
                  <div className="h-px w-0 bg-neon-red group-hover:w-16 transition-all duration-500"></div>
                  <p className="mt-4 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Installations, Performances, Video</p>
              </div>
              <img src={`${import.meta.env.BASE_URL}images/works/perf1.jpg`} alt="Works" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          </Link>

          {/* Lab */}
          <Link to="/lab" className="group relative h-80 bg-void overflow-hidden hover:bg-black transition-colors">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-3xl font-black text-white group-hover:text-neon-red transition-colors uppercase mb-2">Lab</h3>
                  <div className="h-px w-0 bg-neon-red group-hover:w-16 transition-all duration-500"></div>
                  <p className="mt-4 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Open Source, AI Tools, Glitch Code</p>
              </div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                  <span className="font-mono text-9xl text-gray-500">{`{}`}</span>
              </div>
          </Link>
      </div>

      {/* Patreon / Support */}
      <div className="w-full bg-neon-red/5 border-b border-neon-red/20 py-16 text-center">
          <h3 className="text-xl font-black text-neon-red mb-4 uppercase tracking-widest">Support The Chaos</h3>
          <p className="text-gray-400 font-mono text-sm mb-8 max-w-md mx-auto">
              Help fund the destruction of perfectly good hardware for the sake of art.
          </p>
          <button className="btn-obscene opacity-50 cursor-not-allowed relative group">
              <span>Patreon Launching Soon</span>
              <div className="absolute top-full mt-2 left-0 w-full text-xs text-neon-red opacity-0 group-hover:opacity-100">Standby...</div>
          </button>
      </div>

      <div className="w-full max-w-4xl mx-auto py-20 px-4">
          <AcronymGenerator />
      </div>

    </Layout>
  );
};

export default Home;
