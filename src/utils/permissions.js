import { PermissionsAndroid } from 'react-native';

export const requestPermission = async () => {
  try {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Milk Control',
        message: 'App need access to your position to enhance your checklist experience',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Deny',
        buttonPositive: 'OK',
      },
    );
  } catch (error) {
    console.log({ error });
  }
};

export const checkPermission = async () => {
  try {
    const result = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    return result;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
