import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import NextHeader from '@components/login/NextHeader'
import { AuthContext } from '../../../context/context'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


const NextLogin = ({route}) => {
const [login,setLogin] = useState(false);
const [password,setPassword] = useState('');
const [check,setCheck] = useState(false);
const {getAuth} = useContext(AuthContext);

const email = route.params.email;
const loginHandler = () =>{
RNSecureKeyStore.get('@user.data')
.then(res => {
  goLogin(res);
},
err => {
  console.log('Something went wrong!', err);
},
);
};

const goLogin = res => {
  res = JSON.parse(res);
  if(res.userEmail === email && res.userPassword === password){
    getAuth(true);
  }else{
    ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
  }

}

  return (
  <View>
    <NextHeader 
       btnText='Login'
       isLogin={login}
       passValue={password}
       onChangePass={val => setPassword(val)}
       actionHandler={loginHandler}
       checkValue={check}
       onChangeCheck={val=> setCheck(val)}
    /> 
  </View>
   

  )
}

export default NextLogin