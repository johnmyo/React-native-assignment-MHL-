import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



//pages
import Dashboard from '../../pages/Dashboard/Dashboard'

const Stack = createNativeStackNavigator();

const dashboardStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='DashbordScreen' component={Dashboard}/>
   </Stack.Navigator>
  )
}

export default dashboardStack