import React, { useState, useEffect } from 'react';
import { useOS } from '../../context/OSContext';

const Taskbar: React.FC = () => {
  const { windows, minimizeWindow, focusWindow, openWindow } = useOS();
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-8 bg-win-gray win-border-out flex items-center px-1 z-[1000] select-none">
      
      {/* Start Button */}
      <div className="relative">
        <button 
            className={`h-6 px-2 flex items-center gap-1 font-bold font-ms-sans text-sm ${startOpen ? 'win-border-in bg-gray-300' : 'win-border-out'}`}
            onClick={() => setStartOpen(!startOpen)}
        >
            <img src="/vite.svg" className="w-4 h-4 grayscale" />
            S.H.I.T.
        </button>
        
        {startOpen && (
            <div className="absolute bottom-8 left-0 w-48 bg-win-gray win-border-out flex flex-col p-1 shadow-xl">
                <div className="bg-win-blue-light h-full w-6 absolute left-0 top-0 bottom-0 flex items-end justify-center pb-2">
                    <span className="transform -rotate-90 text-white font-bold tracking-widest text-lg whitespace-nowrap">SERIOUS 93</span>
                </div>
                <div className="pl-8 flex flex-col gap-1">
                    <button className="text-left px-2 py-1 hover:bg-win-blue hover:text-white flex items-center gap-2" onClick={() => { openWindow('About', 'TEXT'); setStartOpen(false); }}>
                        <span>📂</span> About
                    </button>
                    <button className="text-left px-2 py-1 hover:bg-win-blue hover:text-white flex items-center gap-2" onClick={() => { openWindow('Instruments', 'EXPLORER'); setStartOpen(false); }}>
                        <span>🎹</span> Instruments
                    </button>
                    <button className="text-left px-2 py-1 hover:bg-win-blue hover:text-white flex items-center gap-2" onClick={() => { openWindow('Doom', 'DOOM'); setStartOpen(false); }}>
                        <span>💀</span> DOOM.EXE
                    </button>
                    <div className="border-t border-gray-500 my-1"></div>
                    <button className="text-left px-2 py-1 hover:bg-win-blue hover:text-white flex items-center gap-2" onClick={() => window.location.reload()}>
                        <span>🔌</span> Shut Down...
                    </button>
                </div>
            </div>
        )}
      </div>

      <div className="w-0.5 h-6 bg-gray-400 mx-2 border-l border-white border-r border-gray-600"></div>

      {/* Open Windows */}
      <div className="flex-grow flex items-center gap-1 overflow-hidden px-1">
        {windows.map(win => (
            <button
                key={win.id}
                onClick={() => win.isMinimized ? focusWindow(win.id) : minimizeWindow(win.id)}
                className={`h-6 px-2 max-w-[150px] flex items-center gap-1 text-xs font-ms-sans truncate ${win.isMinimized || false ? 'win-border-out' : 'win-border-in bg-gray-200 font-bold'}`}
            >
                <img src="/vite.svg" className="w-3 h-3" />
                {win.title}
            </button>
        ))}
      </div>

      <div className="w-0.5 h-6 bg-gray-400 mx-2 border-l border-white border-r border-gray-600"></div>

      {/* Clock */}
      <div className="h-6 win-border-in px-3 flex items-center bg-white text-xs font-ms-sans mx-1">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Taskbar;
