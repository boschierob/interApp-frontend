import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Pages/LoginScreen';
import LogoutScreen from '../Pages/LogoutScreen';
import InterventionDeclarationScreen from '../Pages/InterventionDeclarationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Logout" component={LogoutScreen} />
                <Stack.Screen name="InterventionDeclaration" component={InterventionDeclarationScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigator;
