import React from 'react';
import Layout from '../components/Layout';
import AcronymGenerator from '../components/AcronymGenerator';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-4xl relative">
            <div className="absolute -inset-1 bg-neon-red opacity-20 blur-2xl animate-pulse"></div>
            <AcronymGenerator />
        </div>
        
        <div className="text-center max-w-2xl mx-auto space-y-8 mt-12 relative z-20">
            <div className="border-l-4 border-neon-red pl-6 text-left">
                <h2 className="text-4xl font-black text-off-white mb-2 uppercase glitch-text" data-text="Under Destruction">
                    Under Destruction
                </h2>
                <p className="text-gray-400 font-mono text-lg">
                    Migrating noise from the void. <br/>
                    Safety protocols disabled.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <Link to="/products" className="btn-obscene group">
                    <span className="relative z-10">Enter The Shop</span>
                    <div className="absolute inset-0 bg-blood transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
                </Link>
                <Link to="/about" className="btn-obscene group border-gray-500 text-gray-500 hover:border-neon-red">
                    <span className="relative z-10">Read Manifesto</span>
                </Link>
            </div>
        </div>

        {/* Decorative BG Elements */}
        <div className="fixed top-1/4 left-10 text-9xl font-black text-void text-stroke-red opacity-10 -z-10 rotate-90 pointer-events-none select-none">
            NOISE
        </div>
        <div className="fixed bottom-10 right-10 text-9xl font-black text-void text-stroke-red opacity-10 -z-10 pointer-events-none select-none">
            FILTH
        </div>
      </div>
    </Layout>
  );
};

export default Home;