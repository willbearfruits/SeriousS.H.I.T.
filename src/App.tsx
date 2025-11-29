import React from 'react';
import { OSProvider, useOS } from './context/OSContext';
import BootScreen from './components/os/BootScreen';
import Taskbar from './components/os/Taskbar';
import DesktopIcon from './components/os/DesktopIcon';
import WindowFrame from './components/os/WindowFrame';
import { instruments, works, labs } from './data/content';
import './index.css';

// Manifesto Text
const MANIFESTO = `
SERIOUS S.H.I.T. MANIFESTO v1.0

I build experimental music devices—mostly guitar pedals and noise boxes—for people who think sound equipment should BLEED, not behave. Everything happens at home: circuit design, graphics, enclosures, testing, R&D. Solo operation, no factory, no compromise.

It started as S.H.I.T.—raw, aggressive, unapologetic. But I wasn't satisfied with just noise. So it evolved into Serious S.H.I.T., expanding the range from subtle and musical to absolutely hellish. Same DIY ethos, better sound design.

"THE PHILOSOPHY IS SIMPLE: NOTHING IS HOLY."

I publish everything—schematics, Gerbers, PCB files, graphics, code—under open source licenses. Fork it, mod it, build your own. But if you want one assembled and tested, I do limited runs of 13 units per design before moving on to the next experiment. Once they're gone, they're gone.

Build one. Break one. Make it yours.
`;

// Desktop Content Wrapper
const Desktop: React.FC = () => {
  const { windows, isBooting } = useOS();

  if (isBooting) return <BootScreen />;

  return (
    <div className="h-screen w-screen bg-win-bg relative overflow-hidden">
      {/* Desktop Icons Grid */}
      <div className="p-4 grid grid-flow-col grid-rows-6 gap-4 w-max h-[calc(100vh-40px)]">
        <DesktopIcon 
            label="My Computer" 
            icon="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png" 
            type="EXPLORER" 
            onDoubleClick={() => window.open('https://github.com/willbearfruits', '_blank')}
        />
        <DesktopIcon 
            label="Instruments" 
            icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" 
            type="EXPLORER" 
            content={{ type: 'instruments', data: instruments }}
        />
        <DesktopIcon 
            label="Works" 
            icon="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" 
            type="EXPLORER" 
            content={{ type: 'works', data: works }}
        />
        <DesktopIcon 
            label="The Lab" 
            icon="https://win98icons.alexmeub.com/icons/png/directory_program_group_small-4.png" 
            type="EXPLORER" 
            content={{ type: 'labs', data: labs }}
        />
        <DesktopIcon 
            label="Recycle Bin" 
            icon="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png" 
            type="EXPLORER" 
            content={{ type: 'empty' }}
        />
        
        <DesktopIcon label="Doom.exe" icon="https://win98icons.alexmeub.com/icons/png/game_help-4.png" type="DOOM" />
        <DesktopIcon label="Manifesto.txt" icon="https://win98icons.alexmeub.com/icons/png/notepad-5.png" type="TEXT" content={MANIFESTO} />
        <DesktopIcon label="Contact.msg" icon="https://win98icons.alexmeub.com/icons/png/envelope_closed-1.png" type="CONTACT" />
      </div>

      {/* Windows Layer */}
      {windows.map((win) => (
        <WindowFrame 
          key={win.id} 
          id={win.id} 
          title={win.title} 
          zIndex={win.zIndex}
          isMinimized={win.isMinimized}
          isMaximized={win.isMaximized}
        >
            {/* Render Content Based on Type */}
            {win.type === 'TEXT' && (
                <div className="p-4 font-mono text-sm whitespace-pre-wrap">{win.content}</div>
            )}
            
            {win.type === 'DOOM' && (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
                    <iframe 
                        src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Foriginal%2F2%2Fdoom-1993.jsdos?anonymous=1"
                        className="w-full h-full border-none"
                        title="DOOM"
                    />
                </div>
            )}

            {win.type === 'CONTACT' && (
                <div className="p-4 flex flex-col gap-4 bg-win-gray-light h-full">
                    <div className="flex items-center gap-2">
                        <img src="https://win98icons.alexmeub.com/icons/png/envelope_open-0.png" className="w-8"/>
                        <span className="font-bold">Send a Message</span>
                    </div>
                    <div className="space-y-2">
                        <p><strong>Email:</strong> <a href="mailto:yaniv.schonfeld@gmail.com" className="text-blue-800 underline">yaniv.schonfeld@gmail.com</a></p>
                        <p><strong>Studio:</strong> Jerusalem, Israel</p>
                        <div className="border-t border-gray-400 my-2"></div>
                        <p className="text-xs text-gray-600">Or shout into the void. That usually works.</p>
                    </div>
                </div>
            )}

            {win.type === 'EXPLORER' && win.content?.type === 'empty' && (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png" className="w-12 opacity-50 mb-2"/>
                    <p>This folder is empty.</p>
                </div>
            )}

            {win.type === 'EXPLORER' && win.content?.type !== 'empty' && (
                <div className="grid grid-cols-4 gap-4 content-start h-full">
                    {win.content?.data?.map((item: any) => (
                        <div 
                            key={item.id || item.title} 
                            className="flex flex-col items-center gap-1 p-2 hover:bg-blue-200 cursor-pointer group text-center"
                            onClick={() => {
                                if (item.link || item.video) {
                                    window.open(item.link || item.video, '_blank');
                                } else {
                                    // If internal detail view needed, could open another window here
                                    alert("File details: " + (item.description || item.shortDesc));
                                }
                            }}
                        >
                            <img 
                                src={item.image ? `${import.meta.env.BASE_URL}${item.image}` : "https://win98icons.alexmeub.com/icons/png/file_lines-0.png"} 
                                className="w-10 h-10 object-cover border border-gray-400 bg-white"
                                onError={(e) => {e.currentTarget.src = "https://win98icons.alexmeub.com/icons/png/file_lines-0.png"}}
                            />
                            <span className="text-xs truncate w-full px-1 group-hover:text-blue-900">{item.name || item.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </WindowFrame>
      ))}

      <Taskbar />
    </div>
  );
};

function App() {
  return (
    <OSProvider>
      <Desktop />
    </OSProvider>
  );
}

export default App;