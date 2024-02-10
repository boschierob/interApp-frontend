import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import InterventionDeclarationScreen from '../screens/InterventionDeclarationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
      <Stack.Screen name="InterventionDeclaration" component={InterventionDeclarationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
