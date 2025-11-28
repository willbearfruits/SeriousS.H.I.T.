import React from 'react';
import Layout from '../components/Layout';
import { music } from '../data/content';

const Music: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-black mb-12 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="AUDIO">
        AUDIO
      </h1>

      <div className="space-y-24">
        {music.map((album, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`border border-gray-800 p-2 bg-black ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    {album.video ? (
                        <div className="aspect-square w-full bg-black border border-gray-900 relative">
                             <iframe 
                                src={album.video} 
                                className="w-full h-full"
                                allowFullScreen
                                title={album.title}
                            ></iframe>
                        </div>
                    ) : (
                        <div className="aspect-square w-full bg-[#050505] flex items-center justify-center border border-gray-900">
                            <div className="text-6xl font-black text-gray-800">{album.title[0]}</div>
                        </div>
                    )}
                </div>

                <div className={`${index % 2 !== 0 ? 'md:order-1 text-right' : ''}`}>
                    <h2 className="text-4xl font-black text-white mb-2 uppercase">{album.title}</h2>
                    <div className="text-neon-red font-mono mb-6">{album.year}</div>
                    <p className="text-gray-400 font-mono text-lg mb-8">{album.description}</p>
                    <button className="btn-obscene text-sm">STREAM / DOWNLOAD</button>
                </div>
            </div>
        ))}
      </div>
    </Layout>
  );
};

export default Music;
