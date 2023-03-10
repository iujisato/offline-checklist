import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home';
import { AppProvider } from './src/contexts/app';
import { DatabaseProvider } from './src/contexts/database';
import { CheckListProvider } from './src/contexts/checklist';

if (__DEV__) {
  import('./src/configs/reactotron').then(() => console.log('Reactotron Configured'));
}

const Stack = createNativeStackNavigator();

const App = () => (
  <DatabaseProvider>
    <AppProvider>
      <CheckListProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </CheckListProvider>
    </AppProvider>
  </DatabaseProvider>
);

export default App;
