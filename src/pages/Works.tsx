import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { works, collaborations } from '../data/content';

const Works: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Performance', 'Installation', 'Video', 'Collaboration', 'Music/Performance'];

  const combinedWorks = [
      ...works,
      ...collaborations.map(c => ({ ...c, type: 'Collaboration', image: '' })) 
  ];

  const filteredWorks = filter === 'All' 
    ? combinedWorks 
    : combinedWorks.filter(w => w.type === filter || (filter === 'Collaboration' && 'role' in w));

  return (
    <>
      <h1 className="text-5xl md:text-7xl font-black mb-8 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="WORKS ARCHIVE">
        WORKS ARCHIVE
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-neon-red/20 pb-6">
        {filters.map(f => (
            <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono uppercase text-xs md:text-sm px-4 py-2 border transition-all ${
                    filter === f 
                    ? 'border-neon-red bg-neon-red text-black font-bold' 
                    : 'border-gray-800 text-gray-500 hover:border-neon-red/50 hover:text-white'
                }`}
            >
                {f}
            </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredWorks.map((work: any) => (
            <Link to={work.id && !work.role ? `/works/${work.id}` : '#'} key={work.id} className={`group relative block ${work.role ? 'cursor-default' : ''}`}>
                <div className="aspect-video overflow-hidden border border-gray-800 bg-black relative mb-4">
                    {work.image ? (
                        <img 
                            src={`${import.meta.env.BASE_URL}${work.image}`} 
                            alt={work.title} 
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#080808] text-gray-800 font-mono">
                            <span className="text-4xl font-black mb-2">{work.title[0]}</span>
                            <span className="text-xs tracking-widest">NO IMAGE SIGNAL</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-neon-red mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex justify-between items-end border-b border-gray-800 pb-2 group-hover:border-neon-red transition-colors">
                    <h3 className="text-2xl font-black text-off-white uppercase">{work.title}</h3>
                    <span className="font-mono text-xs text-neon-red border border-neon-red px-2 py-0.5">{work.type || 'COLLAB'}</span>
                </div>
                <p className="mt-2 text-gray-500 font-mono text-sm line-clamp-3">{work.description}</p>
                {work.link && (
                    <a href={work.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-xs text-neon-red hover:underline">EXTERNAL LINK &rarr;</a>
                )}
            </Link>
        ))}
      </div>
    </>
  );
};

export default Works;