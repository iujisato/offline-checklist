import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { checkPermission, requestPermission } from '../utils/permissions';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [offline, setOffline] = useState(false);
  const [location, setLocation] = useState({});

  const value = useMemo(() => ({
    offline,
    location,
    setLocation,
  }), [
    offline,
    location,
    setLocation,
  ]);

  const checkAndRequestPermission = async () => {
    let permissionGranted = await checkPermission();

    if (!permissionGranted) {
      const reqPermission = await requestPermission();

      permissionGranted = reqPermission === PermissionsAndroid.RESULTS.GRANTED;
    }

    return permissionGranted;
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((networkState) => {
      setOffline(!networkState.isInternetReachable);
    });

    if (Platform.OS === 'android') {
      checkAndRequestPermission();
    }

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
