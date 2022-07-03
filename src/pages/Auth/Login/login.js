import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import React,{useContext, useState} from 'react';
import Header from '@components/login/header';
import styles from '../../../components/login/style';
import { AuthContext } from '../../../context/context';
import MyModal from '../../../components/login/languageModal';



const Login = ({navigation}) => {
const [lang, setLang]  = useState('Language')
const [email,setEmail] = useState('');
const [login, setLogin] = useState(true);  



const nextHandler = () => {
    if(login){
        navigation.navigate('NextLoginScreen',{email:email})
    }else{
        navigation.goBack();
    }
    console.log('login email:: ', email);
    
}
const footerAction = () => {
if(login){
    navigation.navigate('Register');
}else{
    navigation.navigate('Login');
}
}





return (
    
     <View>
        <MyModal/>
        <Header
         title='Login'
         footerText="You don't have a account please "
         footerBtn="Register"
         footerAction={footerAction}
         nextHandler={nextHandler}
         emailValue={email}
         onChangeEmail={val =>setEmail(val)}
         />
    </View>
)
}

export default Login;
