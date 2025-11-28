import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-6xl font-black mb-12 text-neon-red tracking-tighter">MANIFESTO</h1>
        
        <div className="space-y-8 text-lg font-mono leading-relaxed text-gray-300 border-l border-neon-red/30 pl-8 md:pl-12">
          <p>
            I build experimental music devices—mostly guitar pedals and noise boxes—for people who think sound equipment should <span className="text-neon-red font-bold">BLEED</span>, not behave. Everything happens at home: circuit design, graphics, enclosures, testing, R&D. Solo operation, no factory, no compromise.
          </p>

          <p>
            It started as S.H.I.T.—raw, aggressive, unapologetic. But I wasn't satisfied with just noise. So it evolved into Serious S.H.I.T., expanding the range from subtle and musical to absolutely hellish. Same DIY ethos, better sound design.
          </p>

          <div className="bg-neon-red/5 p-6 border border-neon-red/20 my-8 transform -rotate-1">
            <p className="font-bold text-off-white text-xl italic">
                "THE PHILOSOPHY IS SIMPLE: NOTHING IS HOLY."
            </p>
          </div>

          <p>
            I publish everything—schematics, Gerbers, PCB files, graphics, code—under open source licenses. Fork it, mod it, build your own. But if you want one assembled and tested, I do limited runs of 13 units per design before moving on to the next experiment. Once they're gone, they're gone.
          </p>

          <p>
            I also teach at the <strong>Musrara School of Art</strong>, focusing on technology-driven projects, new media art, and machine learning for creatives.
          </p>

          <p>
            Beyond the lab, I play guitar for <strong>Parve</strong> and sometimes <strong>SEVEL</strong>.
          </p>

          <p className="text-xl font-bold text-off-white pt-8">
            Serious S.H.I.T. is DIY culture colliding with boutique electronics. It's deliberately ugly, unapologetically loud, and built on the idea that gear should encourage you to destroy and rebuild it. <br/><br/>
            <span className="text-neon-red">BUILD ONE. BREAK ONE. MAKE IT YOURS.</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
