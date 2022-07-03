import { View, Text, Alert } from 'react-native'
import React,{useState,useContext} from 'react'
import NextHeader from '@components/login/NextHeader'
import { AuthContext } from '../../../context/context'
import { appStorage } from '../../../utils/appStorage'




const NextLogin = ({route}) => {

const {getAuth} = useContext(AuthContext); 

const [login,setLogin] = useState(true);
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');


const registerHandler = () =>{
 if(password === confirmPassword) {
  console.log('You are good to go!');
  storeData();
 }else{
    Alert.alert(
    "My App",
    "Please type same password !",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
 }
}

const storeData = () =>{
 const email = route.params.email;
  const data2 = {
    userEmail : email,
    userPassword:password,
    userConfirmPassword:confirmPassword,
   }
  try {
     appStorage.setItem('@user.data',JSON.stringify(data2));
     getAuth(true);
      console.log(data2);
   } catch (error) {
    console.log('Something went wrong! ', error);
   }
}


  return (
  <View>
  <NextHeader 
  btnText='Register' 
  isLogin={login}
  passValue={password}
  onChangePass={val=> setPassword(val)}
  confirmPassValue={confirmPassword}
  onChangeConfirmPass={val => setConfirmPassword(val)}
  actionHandler={registerHandler}
  />    
 </View>
  )
}

export default NextLogin