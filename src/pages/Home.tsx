import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { instruments } from '../data/content';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-4xl text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black text-neon-red mb-4 glitch-text" data-text="SERIOUS S.H.I.T.">
                SERIOUS S.H.I.T.
            </h1>
            <h2 className="text-xl md:text-2xl tracking-widest text-gray-400 font-mono mb-8">
                SUPER HYPER INCREDIBLE THINGS
            </h2>
            <p className="text-lg md:text-xl text-off-white max-w-2xl mx-auto font-mono border-l-2 border-neon-red pl-4 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-4">
                Interdisciplinary artist, noise-maker, and teacher building open-source instruments, performances, and tools for breaking sound and images.
            </p>
        </div>

        {/* Entry Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
            <Link to="/instruments" className="group relative h-64 border border-neon-red/30 bg-void overflow-hidden hover:border-neon-red transition-colors">
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <img src={`${import.meta.env.BASE_URL}${instruments[0].image}`} alt="Instruments" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-black text-white group-hover:text-neon-red transition-colors uppercase">Instruments</h3>
                    <div className="h-1 w-12 bg-neon-red mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
            </Link>

            <Link to="/works" className="group relative h-64 border border-neon-red/30 bg-void overflow-hidden hover:border-neon-red transition-colors">
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <img src={`${import.meta.env.BASE_URL}images/works/perf1.jpg`} alt="Works" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-black text-white group-hover:text-neon-red transition-colors uppercase">Works</h3>
                    <div className="h-1 w-12 bg-neon-red mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
            </Link>

            <Link to="/lab" className="group relative h-64 border border-neon-red/30 bg-void overflow-hidden hover:border-neon-red transition-colors">
                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <span className="font-mono text-4xl text-gray-700 group-hover:text-gray-500">{`{ }`}</span>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-black text-white group-hover:text-neon-red transition-colors uppercase">Open-Source Lab</h3>
                    <div className="h-1 w-12 bg-neon-red mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
            </Link>
        </div>

        {/* Latest */}
        <div className="w-full max-w-6xl border-t border-neon-red/20 pt-12">
            <h3 className="text-xl font-black text-neon-red mb-8 uppercase tracking-widest flex items-center">
                <span className="w-4 h-4 bg-neon-red mr-4 animate-pulse"></span>
                Latest Transmissions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video bg-black border border-gray-800">
                    <iframe src="https://www.youtube.com/embed/hmRgam2-x0o" className="w-full h-full" allowFullScreen title="Latest 1"></iframe>
                </div>
                <div className="aspect-video bg-black border border-gray-800">
                    <iframe src="https://www.youtube.com/embed/vEsWCcictmQ" className="w-full h-full" allowFullScreen title="Latest 2"></iframe>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
