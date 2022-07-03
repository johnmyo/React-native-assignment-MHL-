import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        
        justifyContent:"center",
        alignItems:"center",
       marginTop:100,
    },
    title:{
      fontSize:28,
      color:'#000',
    },

   myInput:{
    width:250,
    height:40,
    borderRadius:5,
    backgroundColor:'#fefefe',
    paddingLeft: 15,
    color:'#000',
   
    },
    btnText:{
     fontSize:18,
     color:"#fff"

    },
    btn:{
      backgroundColor:'#da4453',
      width:250,
      height:50,
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
    },
    footerContainer:{
      justifyContent:"center",
      flexDirection:'row',
      marginTop:30,
     
    },
    centeredView: {
      alignSelf:'center',
      margin:'auto',
      justifyContent: "center",
      alignItems: "center",
      top:0,
      right:0,
      position:'absolute',
      paddingRight:10,
      paddingTop:10,
    },
    centeredModalView:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
      },
    modalView: {
      justifyContent:'center',
      alignItems:'center',
      margin: 20,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    
    buttonOpen: {
      width:80,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#06bcef',
      borderRadius:8,
    },
    textStyle: {
      color: "#fff",
      textAlign: "center"
    },
    modalText: {
      textAlign: "center",
      color:'#000',
    },
    btnLanguage: {
      marginVertical:10,
      marginHorizontal:40,
      width:100,
      height:40,
      borderRadius:2,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      boderColor:'#000',

    }
   

})

export default styles;