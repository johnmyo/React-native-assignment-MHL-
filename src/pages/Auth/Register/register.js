import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header  from '@components/login/header'
import { appStorage } from '../../../utils/appStorage'



const Register = ({navigation}) => {
 
  const [email,setEmail] = useState('');
  const [login, setLogin] = useState(true);
 
  const footerAction = () => {
    if(login){
        navigation.navigate('Login');
    }else{
        navigation.goBack();
    }
  
    }
  const nextHandler = () => {
   if(login){
    navigation.navigate('NextRegisterScreen',{email:email});
   }else{
    navigation.goBack();
   }
  //  storeData();

  }
// const storeData = () =>{
//   const data = {
//     userEmail:email,
//   };
//   try {
//      appStorage.setItem('@user.data',JSON.stringify(data));
//       console.log(data);
//    } catch (error) {
//     console.log('Something went wrong! ', error);
//    }
// }


  return (
    <View>
      <Header
      title='Register'
      footerText="If you have a account please "
      footerBtn="Login"
      footerAction={footerAction}
      nextHandler={nextHandler}
      emailValue={email}
      onChangeEmail={val =>setEmail(val)}
      />
    </View>
   
  )
}

export default Register