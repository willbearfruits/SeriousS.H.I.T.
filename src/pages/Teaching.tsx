import React from 'react';
import Layout from '../components/Layout';

const Teaching: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-black mb-12 text-stroke-red text-transparent bg-clip-text bg-white glitch-text" data-text="INSTRUCTION">
        INSTRUCTION
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-neon-red/30 p-8 bg-black/50 hover:bg-black transition-colors">
            <h2 className="text-3xl font-black text-white mb-4">CREATIVE DESTRUCTION</h2>
            <div className="h-1 w-20 bg-neon-red mb-6"></div>
            <p className="text-gray-400 font-mono mb-8">
                A hands-on workshop on circuit bending, hardware hacking, and the art of breaking things to make new sounds. 
                No prior electronics knowledge required.
            </p>
            <div className="space-y-2 font-mono text-sm text-gray-500 mb-8">
                <div>DURATION: 3 Days</div>
                <div>LEVEL: Beginner - Intermediate</div>
                <div>FOCUS: Analog Circuitry</div>
            </div>
            <button className="btn-obscene w-full">VIEW SYLLABUS</button>
        </div>

        <div className="border border-neon-red/30 p-8 bg-black/50 hover:bg-black transition-colors">
            <h2 className="text-3xl font-black text-white mb-4">MACHINE LEARNING FOR ARTISTS</h2>
            <div className="h-1 w-20 bg-neon-red mb-6"></div>
            <p className="text-gray-400 font-mono mb-8">
                Demystifying AI tools for creative practice. From training GANs to running local LLMs and diffusion models.
            </p>
            <div className="space-y-2 font-mono text-sm text-gray-500 mb-8">
                <div>DURATION: 5 Weeks</div>
                <div>LEVEL: Intermediate</div>
                <div>FOCUS: Digital / Code</div>
            </div>
            <button className="btn-obscene w-full">VIEW SYLLABUS</button>
        </div>
      </div>
    </Layout>
  );
};

export default Teaching;
