/**
 * Teqop App.js file
 * @author Meghna Malhotra
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from './src/Routes/Routes';
const App = () => {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
