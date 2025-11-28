import React, { useState, useEffect } from 'react';

const phrases = [
  "SERIOUS HOMEMADE INSANE TECHNOLOGY",
  "SUPER HYPER INCREDIBLE THINGS",
  "SONIC HAVOC INDUCING TOOLS",
  "SALVAGED HARDWARE INTO TORTURE",
  "SOLDER HEAT INSANITY THERAPY",
  "SONIC HELL IN TRANSISTORS",
  "SINISTER HANDWIRED INFURIATING TORMENT"
];

const AcronymGenerator: React.FC = () => {
  const [text, setText] = useState(phrases[0]);
  
  const triggerGlitch = () => {
    const target = phrases[Math.floor(Math.random() * phrases.length)];
    let iterations = 0;
    
    const interval = setInterval(() => {
      setText(target.split("")
        .map((_, index) => {
          if(index < iterations) {
            return target[index];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("")
      );
      
      if(iterations >= target.length){ 
        clearInterval(interval);
      }
      
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
      const timer = setInterval(triggerGlitch, 3000);
      return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-20 text-center cursor-crosshair" onClick={triggerGlitch}>
        <h1 className="text-2xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-blood drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] min-h-[3em] flex items-center justify-center">
            {text}
        </h1>
        <div className="text-xs tracking-[1em] text-gray-500 mt-4 animate-pulse">CLICK TO CORRUPT</div>
    </div>
  );
};

export default AcronymGenerator;