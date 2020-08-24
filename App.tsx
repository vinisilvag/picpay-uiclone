import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import React from 'react';
import BottomTabs from './src/routes/BottomTabs';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  );
}
