import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Destinations from '../pages/Destinations/Destinations';
import DestinationDetails from '../pages/Destinations/DestinationDetails';
import Packages from '../pages/Packages/Packages';
import PackageDetails from '../pages/Packages/PackageDetails';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetails';
import FAQ from '../pages/FAQ/FAQ';
import Booking from '../pages/Booking/Booking';
import NotFound from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Main Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* Destinations */}
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:id" element={<DestinationDetails />} />

        {/* Packages & Experiences */}
        <Route path="packages" element={<Packages />} />
        <Route path="packages/:id" element={<PackageDetails />} />
        <Route path="experiences" element={<Packages />} />

        {/* Informational & Editorial */}
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="faq" element={<FAQ />} />

        {/* Booking */}
        <Route path="booking" element={<Booking />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

