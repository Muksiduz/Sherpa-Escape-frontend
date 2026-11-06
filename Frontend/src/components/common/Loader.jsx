import React from 'react';
import { Compass } from 'lucide-react';

export const Loader = ({ message = 'Loading adventures...', fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <Compass className="w-12 h-12 text-sky-600 animate-spin" />
        <div className="absolute inset-0 rounded-full border-4 border-sky-200 border-t-sky-600 animate-pulse" />
      </div>
      <p className="text-sm font-medium text-slate-600 tracking-wide">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xs">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;

