import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

export const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <ScrollToTop />
      <Navbar />
      {/* 
        On Homepage: Keep exact original padding.
        On Internal Pages: Provide ample top clearance so fixed navbar never obscures breadcrumbs or headings.
      */}
      <main className={`flex-grow ${isHomePage ? 'pt-20' : 'pt-24 sm:pt-28'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
