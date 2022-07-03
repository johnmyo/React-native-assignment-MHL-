import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//pages
import LoginScreen from '@pages/Auth/Login/login';
import RegisterScreen from '@pages/Auth/Register/register';
import NextLoginScreen from '@pages/Auth/Login/nextLogin';
import NextRegisterScreen from  '@pages/Auth/Register/nextRegister'

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown:false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="NextLoginScreen" component={NextLoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="NextRegisterScreen" component={NextRegisterScreen} />
   </Stack.Navigator>
  )
}

export default AuthStack