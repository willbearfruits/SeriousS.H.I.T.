import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { useOS } from '../../context/OSContext';

interface WindowFrameProps {
  id: string;
  title: string;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  children: React.ReactNode;
  initialPos?: { x: number, y: number };
}

const WindowFrame: React.FC<WindowFrameProps> = ({ id, title, zIndex, isMinimized, isMaximized, children, initialPos }) => {
  const { closeWindow, focusWindow, minimizeWindow, maximizeWindow } = useOS();
  const nodeRef = useRef(null);

  if (isMinimized) return null;

  const windowStyle = isMaximized
    ? "fixed top-0 left-0 w-full h-full m-0"
    : "absolute w-full sm:w-[600px] h-[80vh] sm:h-[400px] max-w-full max-h-[calc(100vh-48px)]";

  return (
    <Draggable
      handle=".title-bar"
      defaultPosition={initialPos || { x: 20, y: 20 }}
      nodeRef={nodeRef}
      disabled={isMaximized}
      onMouseDown={() => focusWindow(id)}
    >
      <div 
        ref={nodeRef} 
        className={`${windowStyle} flex flex-col bg-win-gray win-border-out p-1`}
        style={{ zIndex }}
      >
        {/* Title Bar */}
        <div className="title-bar bg-win-blue flex justify-between items-center px-1 py-0.5 select-none cursor-default">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}vite.svg`} className="w-4 h-4" alt="icon" />
            <span className="text-white font-bold font-ms-sans text-sm truncate max-w-[200px]">{title}</span>
          </div>
          <div className="flex gap-1">
            <button onClick={() => minimizeWindow(id)} className="w-5 h-4 bg-win-gray win-border-out flex items-center justify-center active:win-border-in">
              <div className="w-2 h-0.5 bg-black align-bottom mb-0.5"></div>
            </button>
            <button onClick={() => maximizeWindow(id)} className="w-5 h-4 bg-win-gray win-border-out flex items-center justify-center active:win-border-in">
              <div className="w-3 h-2 border-t-2 border-black"></div>
            </button>
            <button onClick={() => closeWindow(id)} className="w-5 h-4 bg-win-gray win-border-out flex items-center justify-center active:win-border-in ml-1">
              <span className="text-xs font-bold leading-none mb-0.5">x</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow bg-white win-border-in overflow-auto p-2 mt-1 relative">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default WindowFrame;
