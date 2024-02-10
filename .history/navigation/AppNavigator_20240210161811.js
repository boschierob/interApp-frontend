import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../Pages/AuthScreen';
import LoginScreen from '../Pages/LoginScreen';
import LogoutScreen from '../Pages/LogoutScreen';
import InterventionDeclarationScreen from '../Pages/InterventionDeclarationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
      <Stack.Screen name="InterventionDeclaration" component={InterventionDeclarationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
