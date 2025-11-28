import React from 'react';
import Layout from '../components/Layout';
import AcronymGenerator from '../components/AcronymGenerator';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Layout>
      <AcronymGenerator />
      
      <div className="text-center space-y-6 animate-fade-in">
        <h2 className="text-3xl mb-8">Under Destruction / Construction</h2>
        <p className="text-lg">Welcome to the new home of Serious S.H.I.T.</p>
        <p className="text-lg">We are migrating our noise from the void.</p>
        
        <div className="pt-8">
           <Link to="/products" className="btn text-xl px-8 py-4">See The Gear</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
