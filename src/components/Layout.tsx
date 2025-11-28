import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-neon-red border-b-2 border-neon-red shadow-[0_0_10px_#ff0000]" 
      : "text-gray-500 hover:text-neon-red hover:tracking-[0.2em] transition-all duration-300";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="crt-overlay"></div>
      
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-neon-red/20 ${scrolled ? 'bg-void/90 backdrop-blur-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="group relative">
                <img 
                    src={`${import.meta.env.BASE_URL}images/logo.png`} 
                    alt="S.H.I.T." 
                    className="w-24 filter drop-shadow-[0_0_5px_rgba(255,0,0,0.5)] group-hover:sepia transition-all duration-100" 
                />
                <div className="absolute inset-0 bg-neon-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <nav className="hidden md:block">
                <ul className="flex gap-8 font-mono font-bold text-sm">
                    <li><Link to="/" className={isActive('/')}>HOME</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>MANIFESTO</Link></li>
                    <li><Link to="/products" className={isActive('/products')}>GEAR</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>TRANSMIT</Link></li>
                </ul>
            </nav>

            {/* Mobile Menu Toggle Placeholder - For simplicity/speed skipping full mobile menu impl for this turn but layout handles it */}
            <div className="md:hidden text-neon-red font-bold border border-neon-red px-2">MENU</div>
        </div>
      </header>

      <main className="flex-grow pt-24 px-4 relative z-10">
        {children}
      </main>

      <footer className="border-t border-neon-red/30 bg-void p-12 text-center relative z-10 mt-20">
        <div className="text-neon-red font-bold text-xl mb-4 tracking-[0.5em] animate-pulse">NOTHING IS HOLY</div>
        <div className="text-gray-600 text-xs font-mono">
            &copy; 2025 SERIOUS S.H.I.T. // ALL RIGHTS RESERVED // DESTROY AFTER LISTENING
        </div>
      </footer>
    </div>
  );
};

export default Layout;