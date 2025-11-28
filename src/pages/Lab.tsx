import React from 'react';
import Layout from '../components/Layout';
import { labs } from '../data/content';

const Lab: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-black mb-12 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="OPEN SOURCE">
        OPEN SOURCE
      </h1>

      <div className="grid grid-cols-1 gap-8">
        {labs.map((tool) => (
            <div key={tool.id} className="border border-gray-800 p-8 bg-black hover:border-neon-red transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-neon-red transition-colors">{tool.name}</h3>
                    <a href={tool.link} target="_blank" className="text-xs font-mono border border-gray-700 px-3 py-1 hover:bg-white hover:text-black transition-colors">
                        GITHUB REPO
                    </a>
                </div>
                <p className="text-gray-400 font-mono mb-6 max-w-2xl">{tool.description}</p>
                <div className="flex gap-4">
                    <button className="text-neon-red font-bold text-sm hover:underline">&gt; DOWNLOAD LATEST</button>
                    <button className="text-gray-500 font-bold text-sm hover:text-white">&gt; VIEW DOCS</button>
                </div>
            </div>
        ))}
      </div>
    </Layout>
  );
};

export default Lab;
