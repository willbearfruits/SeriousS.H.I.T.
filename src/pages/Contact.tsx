import React from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl mb-8">Contact</h1>
      <p className="text-lg mb-8">Got a question? Found a bug in the reality matrix? Want to collaborate?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form 
            className="space-y-6" 
            onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Transmission Failed: Static Site Mode. Please use email.'); 
            }}
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-shit-red font-bold uppercase text-sm">Name / Alias</label>
                <input type="text" id="name" className="bg-[#111] border border-shit-dim p-3 text-white focus:border-shit-red outline-none transition-colors" required />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-shit-red font-bold uppercase text-sm">Email</label>
                <input type="email" id="email" className="bg-[#111] border border-shit-dim p-3 text-white focus:border-shit-red outline-none transition-colors" required />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-shit-red font-bold uppercase text-sm">Transmission</label>
                <textarea id="message" rows={6} className="bg-[#111] border border-shit-dim p-3 text-white focus:border-shit-red outline-none transition-colors resize-y" required></textarea>
            </div>

            <button type="submit" className="btn w-full">Send Transmission</button>
        </form>

        <div className="border-t md:border-t-0 md:border-l border-shit-dim pt-8 md:pt-0 md:pl-8">
            <h3 className="text-xl mb-6 text-white">Direct Line</h3>
            
            <div className="space-y-4">
                <div>
                    <div className="text-xs text-shit-dim uppercase tracking-widest mb-1">Email</div>
                    <a href="mailto:contact@shitisizers.com" className="text-lg hover:text-shit-red">contact@shitisizers.com</a>
                </div>
                
                <div>
                    <div className="text-xs text-shit-dim uppercase tracking-widest mb-1">GitHub</div>
                    <a href="https://github.com/willbearfruits" target="_blank" rel="noreferrer" className="text-lg hover:text-shit-red">willbearfruits</a>
                </div>

                <div>
                    <div className="text-xs text-shit-dim uppercase tracking-widest mb-1">Location</div>
                    <div className="text-lg">The Void (Home Studio)</div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
