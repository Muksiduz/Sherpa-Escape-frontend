import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  const { type, message } = toast;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-500 shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-100 bg-white shadow-emerald-500/10',
    error: 'border-rose-100 bg-white shadow-rose-500/10',
    info: 'border-sky-100 bg-white shadow-sky-500/10',
    warning: 'border-amber-100 bg-white shadow-amber-500/10',
  };

  return (
    <div
      className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl border shadow-lg transition-all duration-300 animate-slideUp ${
        borders[type] || borders.info
      }`}
    >
      <div className="flex items-center gap-3">
        {icons[type] || icons.info}
        <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
          {message}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;

