import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 py-3" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-sky-600 transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-slate-800 truncate">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-sky-600 transition-colors truncate">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

