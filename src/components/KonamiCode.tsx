import React, { useState, useEffect } from 'react';

const KonamiCode: React.FC = () => {
  const [input, setInput] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput(prev => {
        const updated = [...prev, e.key];
        if (updated.length > sequence.length) {
          updated.shift();
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (input.join('') === sequence.join('')) {
      setActive(true);
      setTimeout(() => {
        alert("SYSTEM BREACH DETECTED. WELCOME TO THE VOID.");
        setActive(false);
        setInput([]);
      }, 500);
    }
  }, [input]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-neon-red mix-blend-difference animate-pulse pointer-events-none flex items-center justify-center">
        <h1 className="text-9xl font-black text-black transform rotate-12">BREACH</h1>
    </div>
  );
};

export default KonamiCode;
