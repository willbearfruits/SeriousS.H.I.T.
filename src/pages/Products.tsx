import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-6xl font-black text-center mb-20 text-stroke-red text-transparent bg-clip-text bg-white opacity-90 glitch-text" data-text="ARSENAL">
        ARSENAL
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Fuzilator */}
        <div className="group relative bg-void border border-neon-red/30 p-1 hover:border-neon-red transition-colors duration-300">
            <div className="absolute inset-0 bg-neon-red/5 group-hover:bg-neon-red/10 transition-colors"></div>
            
            {/* Glitch Image Container */}
            <div className="relative h-80 overflow-hidden bg-black border-b border-neon-red/30">
                 <img 
                    src={`${import.meta.env.BASE_URL}images/fuzilator.png`} 
                    alt="The Fuzilator" 
                    className="w-full h-full object-contain p-8 transition-transform duration-75 group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-125"
                />
                <div className="absolute inset-0 bg-neon-red mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>

            <div className="p-8 relative">
                <h3 className="text-3xl font-black uppercase mb-2 text-off-white group-hover:text-neon-red transition-colors">
                    Fuzilator Puke-Machine
                </h3>
                <div className="text-neon-red font-mono text-xl mb-6 border-l-2 border-neon-red pl-4">
                    $333.00 USD
                </div>
                <p className="text-gray-400 font-mono mb-8 text-sm leading-relaxed">
                    High-gain silicon fuzz destruction. Creates gated, vomiting textures. 
                    Self-oscillates into madness. NOT FOR BLUES DADS.
                </p>
                <Link to="/products/fuzilator" className="btn-obscene w-full block text-center">
                    INSPECT DEVICE
                </Link>
            </div>
        </div>

        {/* Coming Soon */}
        <div className="relative border border-gray-800 p-1 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="h-80 bg-black flex items-center justify-center border-b border-gray-800">
                <div className="text-9xl font-black text-gray-800 animate-pulse">?</div>
            </div>
            <div className="p-8">
                <h3 className="text-3xl font-black uppercase mb-2 text-gray-500">Project: UNKNOWN</h3>
                <div className="text-gray-600 font-mono text-xl mb-6 border-l-2 border-gray-600 pl-4">
                    TBA
                </div>
                <p className="text-gray-600 font-mono mb-8 text-sm leading-relaxed">
                    Currently on the breadboard. Circuit bending in progress. Expect chaos.
                </p>
                <button disabled className="w-full border border-gray-700 text-gray-700 py-4 font-mono font-bold cursor-not-allowed">
                    LOCKED
                </button>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;