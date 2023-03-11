import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext({
  loading: false,
  setLoading: () => {},
});

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const value = useMemo(() => ({
    loading,
    setLoading,
  }), [
    loading,
    setLoading,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
