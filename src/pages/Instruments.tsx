import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { instruments } from '../data/content';

const Instruments: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-black mb-12 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="INSTRUMENTS">
        INSTRUMENTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instruments.map((inst) => (
            <Link to={`/instruments/${inst.id}`} key={inst.id} className="group border border-neon-red/20 bg-black hover:border-neon-red transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden bg-[#111] border-b border-neon-red/20 relative">
                    {inst.image ? (
                        <img 
                            src={`${import.meta.env.BASE_URL}${inst.image}`} 
                            alt={inst.name} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-6xl">?</div>
                    )}
                    <div className="absolute top-2 right-2 bg-black/80 border border-neon-red text-neon-red text-xs px-2 py-1 font-mono">
                        {inst.price}
                    </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-neon-red transition-colors">{inst.name}</h3>
                    <p className="text-gray-400 font-mono text-sm mb-4 flex-grow">{inst.shortDesc}</p>
                    <div className="text-xs text-neon-red font-mono uppercase tracking-widest border-t border-gray-800 pt-4">
                        {inst.status}
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Instruments;
