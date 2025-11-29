import React from 'react';
import { labs } from '../data/content';

const Lab: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-black mb-12 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="OPEN SOURCE LAB">
        OPEN SOURCE LAB
      </h1>

      <p className="text-xl font-mono text-gray-400 mb-16 border-l-4 border-neon-red pl-6 max-w-3xl">
        Tools for breaking sound, images, and data. All code is open source. Nothing is hidden.
      </p>

      <div className="grid grid-cols-1 gap-12">
        {labs.map((tool) => (
            <div key={tool.id} className="border border-gray-800 bg-black hover:border-neon-red transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-neon-red text-xs border border-neon-red px-2 py-1">OPEN SOURCE</span>
                </div>
                
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                        <div>
                            <h3 className="text-3xl font-black text-white group-hover:text-neon-red transition-colors mb-2">{tool.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tool.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-0.5">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-gray-300 font-mono text-lg mb-8 leading-relaxed max-w-4xl">
                        {tool.description}
                    </p>

                    {tool.id === 'alphaforge' && (
                        <div className="mb-8 p-4 border border-gray-800 bg-[#0a0a0a]">
                            <div className="text-neon-red font-bold text-xs mb-2 uppercase tracking-widest">3D PREVIEW CAPABILITY</div>
                            <p className="text-xs text-gray-500 font-mono">This tool includes a real-time 3D parametric viewer for generating STL files for knobs. AI-driven geometry.</p>
                        </div>
                    )}

                    <div className="flex gap-6">
                        <a href={tool.link} target="_blank" rel="noreferrer" className="btn-obscene text-sm">
                            VIEW REPO / DOWNLOAD
                        </a>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Lab;