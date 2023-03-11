import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './Dashboard';
import DetailsScreen from './Details';
import CreateScreen from './Create';
import UpdateScreen from './Update';

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Update"
      component={UpdateScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Create"
      component={CreateScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Navigator;
