import { View, Text, TextInput, TouchableOpacity,Pressable,Alert,Modal } from 'react-native'
import React,{useState}  from 'react'
import styles from './style'





const Header = (props)=> {




  return (
    <View>
    
    <View style={styles.container}>
      
      <Text style={styles.title}>{props.title}</Text>
      
      <View>
        <TextInput placeholder='Email' style={[styles.myInput,{ marginTop:50,
    marginBottom:20,}]} placeholderTextColor="#abbaab" value={props.emailValue} onChangeText={props.onChangeEmail} />
      </View>
     <TouchableOpacity style={styles.btn} onPress={props.nextHandler}>
      <Text style={styles.btnText}>Next</Text>
     </TouchableOpacity>
     <View style={styles.footerContainer}>
     <Text style={{ color:'#abbaab' }}>{props.footerText} </Text>
     <TouchableOpacity onPress={props.footerAction}>
      <Text style={{ color:"red"}}>{props.footerBtn}</Text>
     </TouchableOpacity>
     </View>
    </View>
    </View>
  )
}


export default Header