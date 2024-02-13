import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Importer AppNavigator.js
import { fr, registerTranslation } from 'react-native-paper-dates'
registerTranslation('fr', fr)



const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator /> 
    </NavigationContainer>
  );
};

export default App;
