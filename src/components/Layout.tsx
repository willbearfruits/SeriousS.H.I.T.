import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-shit-red underline" : "hover:text-shit-red";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 border-b border-shit-dim flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="block transform -rotate-2 hover:scale-105 transition-transform">
           <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="S.H.I.T." className="max-w-[120px]" />
        </Link>
        <nav>
          <ul className="flex gap-6 text-lg font-bold tracking-widest">
            <li><Link to="/" className={isActive('/')}>HOME</Link></li>
            <li><Link to="/about" className={isActive('/about')}>ABOUT</Link></li>
            <li><Link to="/products" className={isActive('/products')}>PRODUCTS</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        {children}
      </main>

      <footer className="p-6 text-center text-shit-dim text-sm border-t border-shit-dim">
        &copy; {new Date().getFullYear()} Serious S.H.I.T. | Nothing is Holy.
      </footer>
    </div>
  );
};

export default Layout;
