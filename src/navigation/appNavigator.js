import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stack/authStack';
import {AuthContext} from '../context/context';
import DashboardStack from '../navigation/stack/DashboardStack';



const AppNavigator = () => {
const [lang, setLang] = useState('en');
const [splashScreen,setSplashScreen] = useState(true);
const [auth, setAuth] = useState(false);









if(auth){
  setTimeout(() => {
    setSplashScreen(false);
  }, 3000);
}else{
  setTimeout(() => {
    setSplashScreen(false);
  }, 3000);
}

const context = {
  auth,
  lang,
  getAuth:value =>{
    setAuth(value);
  },
  getLang:value =>{
    setLang(value);
  },

}


if(splashScreen) {
  
return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#c94b4b',marginTop:-50}}>
        <Image source={require('../../assets/profile/download.jpg')} style={{ width:80,height:80,borderRadius:50 }} />
        <Text style={{ fontSize:20,color:'#fff',marginTop:20 }}>&copy;2022 Myo Htut Lin</Text>
      </View>
    );
  
}else if(auth){
  return(
  <AuthContext.Provider value={context}>
    <NavigationContainer>
      <DashboardStack/>
    </NavigationContainer>
  </AuthContext.Provider>
  )
}else{
  return (
    <AuthContext.Provider value={context}>
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
    </AuthContext.Provider>
  )
}
}

export default AppNavigator