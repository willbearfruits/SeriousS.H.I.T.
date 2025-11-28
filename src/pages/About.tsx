import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl mb-8 border-b border-shit-dim pb-4">What I'm Trying To Do</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p>I build experimental music devices—mostly guitar pedals and noise boxes—for people who think sound equipment should bleed, not behave. Everything happens at home: circuit design, graphics, enclosures, testing, R&D. Solo operation, no factory, no compromise.</p>

        <p>It started as S.H.I.T.—raw, aggressive, unapologetic. But I wasn't satisfied with just noise. So it evolved into Serious S.H.I.T., expanding the range from subtle and musical to absolutely hellish. Same DIY ethos, better sound design.</p>

        <p>I design all circuits myself. Prototypes get milled on my DIY CNC at home until the design is right, then production runs are manufactured by JLCPCB—better quality, lower cost, more sustainable. Full transparency: I'm not pretending to etch every board by hand. I'm focused on making gear that works and stays accessible.</p>

        <p>The philosophy is simple: <strong className="text-shit-red">Nothing is Holy.</strong> I publish everything—schematics, Gerbers, PCB files, graphics, code—under open source licenses. Fork it, mod it, build your own. But if you want one assembled and tested, I do limited runs of 13 units per design before moving on to the next experiment. Once they're gone, they're gone.</p>

        <p>I'm building this as an open community project. I need help documenting builds, maintaining accessible resources, testing designs, and creating a knowledge base that actually serves people who want to make noise. If you've got skills in documentation, web dev, circuit design, or just want to contribute, get involved.</p>

        <p>Serious S.H.I.T. is DIY culture colliding with boutique electronics. It's deliberately ugly, unapologetically loud, and built on the idea that gear should encourage you to destroy and rebuild it. Build one. Break one. Make it yours.</p>

        <div className="pt-6">
            <Link to="/products" className="btn">See The Products</Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
