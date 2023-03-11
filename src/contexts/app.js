import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [offline, setOffline] = useState(false);

  const value = useMemo(() => ({
    offline,
  }), [
    offline,
  ]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((networkState) => {
      setOffline(!networkState.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
