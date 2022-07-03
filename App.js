import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import  Header  from '@components/login/header';
import Login from '@pages/Auth/Login/login';
import Register from '@pages/Auth/Register/register';
import AppNavigator from './src/navigation/appNavigator';
import NextHeader from './src/components/login/NextHeader';
import NextLogin from './src/pages/Auth/Login/nextLogin';

const App = () => {
 
  return (
 
   <AppNavigator/>
  
  );
}; 


export default App;
