import React, { useState, useEffect } from 'react';

const acronyms = [
  ['Serious', 'Homemade', 'Insane', 'Technology'],
  ['Super', 'Hyper', 'Incredible', 'Things'],
  ['Sound', 'Hardware', 'Innovation', 'Tech'],
  ['Sonic', 'Havoc', 'Inducing', 'Tools'],
  ['Salvaged', 'Hardware', 'Into', 'Torture'],
  ['Strange', 'Heavy', 'Irritating', 'Toys'],
  ['Self-destructive', 'Harmonic', 'Interference', 'Thing'],
  ['Solder', 'Heat', 'Insanity', 'Therapy'],
  ['Seriously', 'Harsh', 'Industrial', 'Tones'],
  ['Stupidly', 'Horrible', 'Interesting', 'Trash'],
  ['Sonic', 'Hell', 'In', 'Transistors'],
  ['Small', 'Handmade', 'Illegal', 'Toys'],
  ['Suspicious', 'Homegrown', 'Irritant', 'Technology'],
  ['Snarling', 'Heinous', 'Infernal', 'Tremolo'],
  ['Sinister', 'Handwired', 'Infuriating', 'Torment']
];

const AcronymGenerator: React.FC = () => {
  const [currentAcronym, setCurrentAcronym] = useState<string[]>(acronyms[0]);
  const [opacity, setOpacity] = useState(1);

  const generate = () => {
    setOpacity(0);
    setTimeout(() => {
      const random = acronyms[Math.floor(Math.random() * acronyms.length)];
      setCurrentAcronym(random);
      setOpacity(1);
    }, 200);
  };

  useEffect(() => {
    const timer = setTimeout(generate, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="border border-shit-dim p-10 text-center cursor-pointer hover:border-shit-red transition-colors select-none mb-12"
      onClick={generate}
    >
      <div 
        className="text-2xl md:text-4xl font-bold transition-opacity duration-200 tracking-wider"
        style={{ opacity }}
      >
        {currentAcronym.join(' ')}
      </div>
      <div className="mt-4 text-shit-dim text-sm italic">[ Click to Generate ]</div>
    </div>
  );
};

export default AcronymGenerator;
