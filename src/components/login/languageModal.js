import { View, Text,Modal,TouchableOpacity,Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './style';
const MyModal = () => {


  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredModalView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.btnLanguage} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLanguage} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>Myanmar</Text>
            </TouchableOpacity>
            </View>
           </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Language</Text>
      </Pressable>
    </View>
  )
}

export default MyModal