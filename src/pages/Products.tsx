import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl mb-4">Products</h1>
      <p className="text-shit-dim mb-12">Limited runs. Experimental circuits. No warranties on sanity.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Fuzilator */}
        <div className="border border-shit-dim p-6 hover:border-shit-red transition-all group">
            <div className="bg-[#111] border border-[#222] h-64 flex items-center justify-center mb-6 overflow-hidden">
                <img 
                    src={`${import.meta.env.BASE_URL}images/fuzilator.png`} 
                    alt="The Fuzilator Puke-Machine" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-xl mb-2 text-shit-text group-hover:text-shit-red">The Fuzilator Puke-Machine</h3>
            <div className="text-shit-red font-bold text-lg mb-4">$333.00</div>
            <p className="text-sm text-gray-400 mb-6">A high-gain fuzz destruction unit. Makes your guitar sound like it's vomiting electricity.</p>
            <Link to="/products/fuzilator" className="btn w-full text-center">View Details</Link>
        </div>

        {/* Coming Soon */}
        <div className="border border-shit-dim p-6 opacity-50">
            <div className="bg-[#111] border border-[#222] h-64 flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-shit-dim">?</span>
            </div>
            <h3 className="text-xl mb-2 text-shit-text">Project: UNKNOWN</h3>
            <div className="text-shit-red font-bold text-lg mb-4">TBA</div>
            <p className="text-sm text-gray-400 mb-6">Currently on the breadboard. Expect chaos.</p>
            <span className="btn w-full text-center cursor-not-allowed hover:bg-transparent hover:text-shit-red">Coming Soon</span>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
