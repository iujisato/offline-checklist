import React, { createContext, useState, useMemo } from 'react';

export const AppContext = createContext({
  loading: false,
  setLoading: () => {},
  synced: true,
  setSynced: () => {},
});

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [synced, setSynced] = useState(true);

  const value = useMemo(() => ({
    loading,
    setLoading,
    synced,
    setSynced,
  }), [
    loading,
    setLoading,
    synced,
    setSynced,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
