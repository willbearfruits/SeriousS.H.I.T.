import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) && path !== '/'
      ? "text-neon-red border-b-2 border-neon-red shadow-[0_0_10px_#ff0000]" 
      : location.pathname === path 
        ? "text-neon-red border-b-2 border-neon-red shadow-[0_0_10px_#ff0000]"
        : "text-gray-500 hover:text-neon-red hover:tracking-[0.2em] transition-all duration-300";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="crt-overlay"></div>
      
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-neon-red/20 ${scrolled ? 'bg-void/90 backdrop-blur-sm py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="group relative flex items-center gap-4">
                <img 
                    src={`${import.meta.env.BASE_URL}images/logo.png`} 
                    alt="S.H.I.T." 
                    className="w-16 md:w-20 filter drop-shadow-[0_0_5px_rgba(255,0,0,0.5)] group-hover:sepia transition-all duration-100 hover:animate-pulse" 
                />
                <div className="hidden md:block font-mono text-xs text-gray-500">
                    <div>SERIOUS S.H.I.T.</div>
                    <div className="text-[0.6rem] tracking-widest">SUPER HYPER INCREDIBLE THINGS</div>
                </div>
            </Link>

            <nav className="hidden lg:block">
                <ul className="flex gap-6 font-mono font-bold text-sm">
                    <li><Link to="/" className={isActive('/')}>HOME</Link></li>
                    <li><Link to="/instruments" className={isActive('/instruments')}>INSTRUMENTS</Link></li>
                    <li><Link to="/works" className={isActive('/works')}>WORKS</Link></li>
                    <li><Link to="/music" className={isActive('/music')}>MUSIC</Link></li>
                    <li><Link to="/teaching" className={isActive('/teaching')}>TEACHING</Link></li>
                    <li><Link to="/lab" className={isActive('/lab')}>LAB</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>ABOUT</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
                </ul>
            </nav>

            <button 
                className="lg:hidden text-neon-red font-bold border border-neon-red px-2 py-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                MENU
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-void border-b border-neon-red p-4 flex flex-col gap-4 font-mono font-bold z-50">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">HOME</Link>
                <Link to="/instruments" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">INSTRUMENTS</Link>
                <Link to="/works" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">WORKS</Link>
                <Link to="/music" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">MUSIC</Link>
                <Link to="/teaching" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">TEACHING</Link>
                <Link to="/lab" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">LAB</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">ABOUT</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-neon-red">CONTACT</Link>
            </div>
        )}
      </header>

      <main className="flex-grow pt-32 px-4 relative z-10">
        <Outlet />
      </main>

      <footer className="border-t border-neon-red/30 bg-void p-12 text-center relative z-10 mt-20">
        <div className="text-neon-red font-bold text-xl mb-4 tracking-[0.5em] animate-pulse">NOTHING IS HOLY</div>
        <div className="text-gray-600 text-xs font-mono space-y-2">
            <div>&copy; 2025 SERIOUS S.H.I.T.</div>
            <div>OPEN SOURCE INSTRUMENTS, NOISE, AND ART</div>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-gray-500 text-sm">
            <a href="https://github.com/willbearfruits" target="_blank" rel="noreferrer" className="hover:text-neon-red hover:animate-shake">GITHUB</a>
            <a href="https://www.youtube.com/dogme666" target="_blank" rel="noreferrer" className="hover:text-neon-red hover:animate-shake">YOUTUBE</a>
            <a href="https://www.instagram.com/wilbear_fruits/" target="_blank" rel="noreferrer" className="hover:text-neon-red hover:animate-shake">INSTAGRAM (ART)</a>
            <a href="https://www.instagram.com/shitisizers/" target="_blank" rel="noreferrer" className="hover:text-neon-red hover:animate-shake">INSTAGRAM (GEAR)</a>
            <a href="https://facebook.com/yaniv.schonfeld" target="_blank" rel="noreferrer" className="hover:text-neon-red hover:animate-shake">FACEBOOK</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;