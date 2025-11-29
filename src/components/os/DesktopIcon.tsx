import React from 'react';
import { useOS, type AppType } from '../../context/OSContext';

interface DesktopIconProps {
  label: string;
  icon?: string;
  type: AppType;
  content?: any;
  onDoubleClick?: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, type, content, onDoubleClick }) => {
  const { openWindow } = useOS();

  const handleDoubleClick = () => {
    if (onDoubleClick) {
        onDoubleClick();
    } else {
        openWindow(label, type, content);
    }
  };

  return (
    <div 
      className="w-20 flex flex-col items-center gap-1 group cursor-pointer active:opacity-50"
      onDoubleClick={handleDoubleClick}
    >
        <div className="w-10 h-10 flex items-center justify-center">
            {/* Placeholder Icon Logic */}
            {icon ? (
                <img src={icon} alt={label} className="w-full h-full object-contain pixelated" />
            ) : (
                <div className="w-8 h-8 bg-win-gray win-border-out"></div>
            )}
        </div>
        <span className="text-white font-ms-sans text-xs text-center px-1 bg-win-blue/0 group-hover:bg-win-blue/50 group-focus:bg-win-blue group-focus:border-dotted border-white">
            {label}
        </span>
    </div>
  );
};

export default DesktopIcon;
