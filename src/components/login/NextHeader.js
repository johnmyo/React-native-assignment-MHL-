import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import styles from './style'

const NextHeader = (props) => {
  return (
    <View style={styles.container}>
    <Text style={[styles.title,{justifyContent:'flex-start'}]}>Security</Text>
    <View>
      <TextInput placeholder='Password' style={[styles.myInput,{ marginTop:50,
    marginBottom:20}]} placeholderTextColor="#abbaab" secureTextEntry value={props.passValue}
    onChangeText={props.onChangePass} />


     {!props.isLogin && (<View style={{ justifyContent:'space-between', flexDirection:'row',marginVertical:10 }}>
     <CheckBox disabled={false}  value={props.checkValue} onValueChange={props.onChangeCheck} />
     <Text style={{ justifyContent:'flex-start',marginRight:70,color:'#000',marginTop:5 }}>Remember Password</Text>
     </View>)}

      {props.isLogin && ( <TextInput placeholder='Confirm Password' style={[styles.myInput,{
    marginBottom:20}]} placeholderTextColor="#abbaab" secureTextEntry value={props.confirmPassValue} 
     onChangeText={props.onChangeConfirmPass} />
    )}
    </View>
   <TouchableOpacity style={styles.btn} onPress={props.actionHandler}>
    <Text style={styles.btnText}>{props.btnText}</Text>
   </TouchableOpacity>
  
  </View>
  )
}

export default NextHeader