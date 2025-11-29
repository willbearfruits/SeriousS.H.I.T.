import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-black text-neon-red mb-4 glitch-text" data-text="404">404</h1>
      <h2 className="text-2xl md:text-4xl font-mono text-off-white mb-8">SIGNAL LOST</h2>
      <p className="text-gray-400 font-mono mb-12 max-w-lg">
        The page you are looking for has been consumed by the void or never existed in this timeline.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 border border-neon-red text-neon-red font-mono font-bold hover:bg-neon-red hover:text-black transition-all duration-300 uppercase tracking-widest"
      >
        Return to Safety
      </Link>
    </div>
  );
};

export default NotFound;
