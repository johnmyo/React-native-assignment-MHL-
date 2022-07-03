import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";
import { AuthContext } from '../../context/context'

const Dashboard = () => {

const {getAuth} = useContext(AuthContext);
const [userEmail,setUserEmail] = useState('');

useEffect(() => {
    getData();
    
},[])




const getData = () => {
 RNSecureKeyStore.get('@user.data')
.then(res => {
  const data = JSON.parse(res);
 setUserEmail(data.userEmail);
console.log('Dashboard data', userEmail);
},
err => {
  console.log('Something went wrong!', err);
},
);
}
 const goLogout = () => {
  try {
    RNSecureKeyStore.remove('@user.data');
    getAuth(false);
  } catch (error) {
    console.log('Something went wrong in logout!', error);
  }
 }







 return (
    <View style={styles.container}>
      <View>
      <Text style={styles.myText}>Welcome To Dashboard</Text>
      <Text style={styles.myEmail}>{userEmail}</Text>
      </View>
      <TouchableOpacity style={styles.btnLogout} onPress={() => goLogout()}>
        <Text style={{ color:'#fff' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )



}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  myText:{
    color: "#000",
    fontSize:25,
  },
  myEmail:{
    color:'#000',
    borderStyle:'solid',
    borderWidth: 3,
    borderColor:'#ff8c00',
    padding: 10,
    marginTop: 10,
   textAlign:'center'
  },
  btnLogout:{
    backgroundColor: '#ff9966',
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:20,
  }
})


export default Dashboard