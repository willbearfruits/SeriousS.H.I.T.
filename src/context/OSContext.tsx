import React, { createContext, useState, useContext, type ReactNode } from 'react';

export type AppType = 'EXPLORER' | 'TEXT' | 'IMAGE' | 'DOOM' | 'BROWSER' | 'CONTACT';

export interface WindowState {
  id: string;
  title: string;
  type: AppType;
  content?: any;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position?: { x: number, y: number };
}

interface OSContextType {
  windows: WindowState[];
  openWindow: (title: string, type: AppType, content?: any) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  isBooting: boolean;
  setBooting: (booting: boolean) => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [nextZIndex, setNextZIndex] = useState(10);

  const openWindow = (title: string, type: AppType, content?: any) => {
    const id = Date.now().toString();
    const newWindow: WindowState = {
      id,
      title,
      type,
      content,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex,
      position: { x: 50 + (windows.length * 20), y: 50 + (windows.length * 20) } // Cascade
    };
    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w => w.id === id ? { ...w, isMinimized: true } : w)
    );
  };

  const restoreWindow = (id: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w)
    );
    setNextZIndex(prev => prev + 1);
  };

  const maximizeWindow = (id: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)
    );
    focusWindow(id);
  };

  const focusWindow = (id: string) => {
    setWindows(prevWindows =>
      prevWindows.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w)
    );
    setNextZIndex(prev => prev + 1);
  };

  return (
    <OSContext.Provider value={{ windows, openWindow, closeWindow, minimizeWindow, restoreWindow, maximizeWindow, focusWindow, isBooting, setBooting: setIsBooting }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error('useOS must be used within an OSProvider');
  return context;
};
