import React, { useEffect, useState } from 'react';
import { useOS } from '../../context/OSContext';

const BootScreen: React.FC = () => {
  const { setBooting } = useOS();
  const [lines, setLines] = useState<string[]>([]);

  const bootSequence = [
    "S.H.I.T. BIOS v1.0.1993",
    "Copyright (C) 2025 Serious Systems Inc.",
    "",
    "CPU: GLITCH-X 666MHz",
    "Memory Test: 640K OK",
    "Memory Test: 16384K OK",
    "Memory Test: 32768K OK",
    "",
    "Detecting Primary Master ... FUZILATOR 2000",
    "Detecting Primary Slave  ... NOISE_GEN_X",
    "Detecting Secondary Master ... CD-ROM DRIVE",
    "",
    "Loading OS...",
    "Initializing Drivers...",
    "Mounting /dev/chaos...",
    "Starting GUI...",
    "READY."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += Math.random() * 500 + 100;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
            setTimeout(() => setBooting(false), 800);
        }
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white font-pixel p-8 z-[9999] cursor-none">
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-between mb-8 text-gray-500">
                <span>Award Modular BIOS v4.51PG</span>
                <span>Energy Star Ally</span>
            </div>
            <div className="space-y-1 text-lg">
                {lines.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
            <div className="mt-8 animate-pulse">_</div>
        </div>
    </div>
  );
};

export default BootScreen;
