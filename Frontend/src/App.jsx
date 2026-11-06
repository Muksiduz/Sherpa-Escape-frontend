import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TravelProvider } from './context/TravelContext';
import { ToastProvider } from './context/ToastContext';
import AppRoutes from './routes/AppRoutes';
import FeaturedPackagesPopup from './components/common/FeaturedPackagesPopup';

export const App = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <TravelProvider>
          <AppRoutes />
          <FeaturedPackagesPopup />
        </TravelProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
