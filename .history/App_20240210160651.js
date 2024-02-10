import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Importer AppNavigator.js

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator /> {/* Utiliser AppNavigator comme composant racine */}
    </NavigationContainer>
  );
};

export default App;
