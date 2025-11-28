import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  return (
    <Layout>
      <Link to="/products" className="text-sm text-shit-dim hover:text-shit-red mb-6 inline-block">&larr; Back to Products</Link>

      <h1 className="text-3xl md:text-4xl mb-8">The Fuzilator Puke-Machine</h1>

      <div className="border border-shit-dim bg-[#111] p-8 mb-12 text-center">
         <img 
            src={`${import.meta.env.BASE_URL}images/fuzilator.png`} 
            alt="The Fuzilator Puke-Machine" 
            className="max-w-full h-auto mx-auto border border-[#333] shadow-[0_0_30px_rgba(255,0,51,0.1)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
            <h2 className="text-xl mb-4 text-white">Description</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-shit-red">
                <li>Dual LPB2 gain stages with tone stack between them.</li>
                <li>High gain on both stages—push hard for gated fuzz, back off for clean drive.</li>
                <li>Guitar volume knob controls saturation level.</li>
                <li>Feedback loop with "eat myself" switch—activates self-oscillation.</li>
                <li>In feedback mode: all knobs affect the feedback, creates ring modulations, octaves, arpeggios.</li>
                <li>Guitar volume changes oscillation pitch in feedback loop.</li>
                <li>Built-in piezo microphone inside the enclosure.</li>
                <li>Piezo activates with switch, filters harsh high end, picks up box resonance.</li>
                <li>Works with guitar, baritone, bass, synthesizers, drums.</li>
                <li>Functions as standalone noise box when nothing is connected and feedback is on.</li>
                <li>Range: subtle clean drive to hellish self-destruction.</li>
            </ul>
            <p className="mt-4 text-shit-red font-bold">Limited run of 13 units.</p>
        </div>
        
        <div className="flex flex-col justify-center items-start border-t md:border-t-0 md:border-l border-shit-dim pt-8 md:pt-0 md:pl-8">
             <div className="text-4xl font-bold text-shit-red mb-2">$333.00 USD</div>
             <div className="text-xl text-gray-500 mb-8">~1,100 ILS</div>
             
             <div className="w-full">
                 <p className="mb-2 text-sm text-gray-400">Interested?</p>
                 <a href="mailto:contact@shitisizers.com" className="btn w-full text-center text-lg py-4">Email to Purchase</a>
                 <p className="text-xs text-gray-500 mt-2 text-center">contact@shitisizers.com</p>
             </div>
        </div>
      </div>

      <div className="aspect-video w-full border border-shit-dim mb-16 bg-black">
        <iframe 
            src="//www.youtube.com/embed/DPi9fYsc-MU?wmode=opaque" 
            frameBorder="0" 
            allowFullScreen 
            className="w-full h-full"
        ></iframe>
      </div>

      <div className="text-center text-shit-dim italic text-sm border-t border-shit-dim pt-8">
            <p>They are all unique but also they are the same.<br/>
            You are not special, if everyone is special.<br/>
            You're just like everyone else,<br/>
            not you, nor anything is special.</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
