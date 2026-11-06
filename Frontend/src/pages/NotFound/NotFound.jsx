import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';
import { Compass, Home, Map } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <PageContainer size="sm">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-xs text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto shadow-inner">
            <Compass className="w-10 h-10 animate-spin" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
              Error 404 • Off Trail
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Lost in the Mountain Pass?
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              The page or trail coordinate you are looking for has been moved, closed for the season, or doesn't exist.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link to="/">
              <Button variant="primary" icon={Home}>
                Return to Basecamp (Home)
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="outline" icon={Map}>
                Explore Active Packages
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default NotFound;

