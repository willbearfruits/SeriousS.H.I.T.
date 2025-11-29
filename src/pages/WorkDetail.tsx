import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { works } from '../data/content';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w: { id: string }) => w.id === id);

  if (!work) return <><div className="text-center pt-20">WORK NOT FOUND</div></>;

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Link to="/works" className="inline-block mb-8 text-neon-red font-mono hover:underline">&lt; ARCHIVE</Link>

        <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-2">{work.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 font-mono">
                <span className="bg-neon-red text-black px-2 py-1 font-bold text-xs">{work.type}</span>
                <span>//</span>
                <span>ARCHIVE ID: {work.id?.toUpperCase()}</span>
            </div>
        </div>

        {work.video ? (
            <div className="aspect-video w-full bg-black border border-gray-800 mb-12">
                <iframe 
                    src={work.video} 
                    className="w-full h-full"
                    allowFullScreen
                    title={work.title}
                ></iframe>
            </div>
        ) : work.image ? (
             <div className="w-full border border-gray-800 mb-12">
                <img src={`${import.meta.env.BASE_URL}${work.image}`} alt={work.title} className="w-full h-auto grayscale contrast-125" />
             </div>
        ) : null}

        <div className="max-w-3xl border-l-4 border-neon-red pl-8 py-4">
            <p className="text-xl font-mono text-gray-300 leading-relaxed">{work.description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
