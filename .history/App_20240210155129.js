import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import des écrans que nous avons créés
import LoginScreen from './Pages/LoginScreen';
import LogoutScreen from './Pages/LogoutScreen';
import InterventionDeclarationScreen from './Pages/InterventionDeclarationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Bruno</Text>
        <StatusBar style="auto" />
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
          <Stack.Screen name="InterventionDeclaration" component={InterventionDeclarationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
