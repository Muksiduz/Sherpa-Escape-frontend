import { createContext, useContext, useState } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    destination: '',
    dates: '',
    travelers: 1,
    category: 'all',
  });

  const [savedDestinations, setSavedDestinations] = useState([]);

  const toggleSaveDestination = (id) => {
    setSavedDestinations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <TravelContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        savedDestinations,
        toggleSaveDestination,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};

