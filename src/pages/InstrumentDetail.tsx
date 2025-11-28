import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { instruments } from '../data/content';

const InstrumentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const inst = instruments.find((i: { id: string }) => i.id === id);

  if (!inst) return <Layout><div className="text-center pt-20">DEVICE NOT FOUND</div></Layout>;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <Link to="/instruments" className="inline-block mb-8 text-neon-red font-mono hover:underline">&lt; BACK TO ARMORY</Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
                <div className="border-2 border-neon-red relative bg-black p-2 group">
                    {inst.image && (
                        <img 
                            src={`${import.meta.env.BASE_URL}${inst.image}`} 
                            alt={inst.name} 
                            className="w-full transition-all duration-500 grayscale group-hover:grayscale-0"
                        />
                    )}
                </div>

                {inst.video && (
                    <div className="border border-gray-800 bg-black p-2">
                        <div className="aspect-video w-full bg-black relative overflow-hidden">
                            <iframe 
                                src={inst.video} 
                                className="w-full h-full"
                                allowFullScreen
                                title="Demo"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <h1 className="text-4xl md:text-6xl font-black uppercase text-off-white mb-4 leading-none">
                    {inst.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-8">
                    <div className="text-3xl font-mono font-bold text-neon-red">{inst.price}</div>
                    <div className="ml-auto text-gray-500 font-mono text-sm">
                        STATUS: <span className="text-white">{inst.status}</span>
                    </div>
                </div>

                <div className="space-y-8 font-mono text-gray-300">
                    <p className="text-lg leading-relaxed">
                        {inst.description}
                    </p>

                    <div>
                        <h3 className="text-neon-red font-bold mb-4 uppercase tracking-widest">Specs</h3>
                        <ul className="grid grid-cols-1 gap-2 text-sm">
                            {inst.features.map((feat: string, i: number) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="text-neon-red">&gt;</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-neon-red/5 border border-neon-red/20 p-6 mt-8">
                        <h4 className="font-bold text-white mb-2">PHILOSOPHY</h4>
                        <p className="text-sm italic">"Nothing is Holy. We build limited runs because we prefer creation over mass production. Once they're gone, they're gone."</p>
                    </div>

                    <div className="pt-8">
                        <a href="mailto:contact@shitisizers.com" className="btn-obscene w-full block text-center text-xl">
                            INQUIRE TO PURCHASE
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default InstrumentDetail;
