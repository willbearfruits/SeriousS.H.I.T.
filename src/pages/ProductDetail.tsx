import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <Link to="/products" className="inline-block mb-8 text-neon-red font-mono hover:underline">&lt; ABORT</Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Visuals */}
            <div className="space-y-8">
                <div className="border-2 border-neon-red relative bg-black p-12 group">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-red"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-red"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-red"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-red"></div>
                    
                    <img 
                        src={`${import.meta.env.BASE_URL}images/fuzilator.png`} 
                        alt="The Fuzilator" 
                        className="w-full drop-shadow-[0_0_15px_rgba(255,0,0,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] transition-all duration-500"
                    />
                </div>

                {/* Video Container */}
                <div className="border border-gray-800 bg-black p-2">
                    <div className="aspect-video w-full bg-black relative overflow-hidden">
                         <div className="absolute inset-0 pointer-events-none border border-neon-red/20 z-10"></div>
                        <iframe 
                            src="//www.youtube.com/embed/DPi9fYsc-MU?wmode=opaque&theme=dark&color=red&autohide=1&modestbranding=1" 
                            className="w-full h-full"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Right: Data */}
            <div>
                <h1 className="text-5xl md:text-6xl font-black uppercase text-off-white mb-4 leading-[0.9]">
                    Fuzilator <br/>
                    <span className="text-neon-red">Puke-Machine</span>
                </h1>
                
                <div className="flex items-end gap-4 mb-12 border-b border-gray-800 pb-8">
                    <div className="text-4xl font-mono font-bold text-white">$333.00</div>
                    <div className="text-gray-500 mb-1">USD</div>
                    <div className="ml-auto text-neon-red font-mono text-sm bg-neon-red/10 px-2 py-1">
                        STOCK: 13 UNITS
                    </div>
                </div>

                <div className="space-y-8 font-mono text-gray-300">
                    <p className="text-lg leading-relaxed border-l-4 border-neon-red pl-6">
                        This is a high-gain beast designed to destroy your signal chain in the most pleasing way possible. 
                        Push it hard for gated fuzz, back off for clean drive. 
                    </p>

                    <div className="grid grid-cols-1 gap-4 text-sm">
                        {[
                            "Dual LPB2 gain stages with tone stack",
                            "Feedback loop 'eat myself' switch (Self-Oscillation)",
                            "Built-in Piezo microphone for physical abuse",
                            "Works with Guitar, Bass, Synths, Drums",
                            "Range: Subtle Drive -> Hellish Self-Destruction"
                        ].map((spec, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-neon-red"></div>
                                {spec}
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 space-y-4">
                        <a href="mailto:contact@shitisizers.com" className="btn-obscene w-full block text-center text-xl">
                            INITIATE PURCHASE
                        </a>
                        <p className="text-center text-xs text-gray-600">
                            Manual transmission required. Email us.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-32 text-center opacity-30 hover:opacity-100 transition-opacity duration-1000">
            <p className="font-mono text-sm tracking-widest">
                THEY ARE ALL UNIQUE BUT ALSO THEY ARE THE SAME.<br/>
                YOU ARE NOT SPECIAL, IF EVERYONE IS SPECIAL.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;