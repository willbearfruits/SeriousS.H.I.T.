import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-12 text-center glitch-text" data-text="TRANSMISSION">TRANSMISSION</h1>
        
        <div className="border border-neon-red/50 bg-black/50 p-8 md:p-12 backdrop-blur-sm relative">
            {/* Decoration corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-red"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-red"></div>

            <form 
                className="space-y-8"
                onSubmit={(e) => { 
                    e.preventDefault(); 
                    alert('ERROR: STATIC REALITY. USE EMAIL.'); 
                }}
            >
                <div>
                    <label className="block text-neon-red font-bold text-sm tracking-widest mb-2">IDENTITY</label>
                    <input 
                        type="text" 
                        className="w-full bg-void border-b-2 border-gray-800 p-4 text-white focus:border-neon-red focus:bg-neon-red/5 outline-none transition-all font-mono"
                        placeholder="Name / Alias"
                    />
                </div>

                <div>
                    <label className="block text-neon-red font-bold text-sm tracking-widest mb-2">FREQUENCY</label>
                    <input 
                        type="email" 
                        className="w-full bg-void border-b-2 border-gray-800 p-4 text-white focus:border-neon-red focus:bg-neon-red/5 outline-none transition-all font-mono"
                        placeholder="Email Address"
                    />
                </div>

                <div>
                    <label className="block text-neon-red font-bold text-sm tracking-widest mb-2">PAYLOAD</label>
                    <textarea 
                        rows={5}
                        className="w-full bg-void border-2 border-gray-800 p-4 text-white focus:border-neon-red focus:bg-neon-red/5 outline-none transition-all font-mono"
                        placeholder="Enter message..."
                    ></textarea>
                </div>

                <button type="submit" className="btn-obscene w-full">
                    SEND SIGNAL
                </button>
            </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center font-mono text-sm">
            <div className="border border-gray-800 p-6 hover:border-neon-red transition-colors">
                <div className="text-gray-500 mb-2">DIRECT LINE</div>
                <a href="mailto:contact@shitisizers.com" className="text-xl text-off-white hover:text-neon-red">
                    contact@shitisizers.com
                </a>
            </div>
            <div className="border border-gray-800 p-6 hover:border-neon-red transition-colors">
                <div className="text-gray-500 mb-2">SOURCE CODE</div>
                <a href="https://github.com/willbearfruits" className="text-xl text-off-white hover:text-neon-red">
                    github.com/willbearfruits
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;