import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Importer AppNavigator.js
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator /> 
    </NavigationContainer>
  );
};

export default App;
