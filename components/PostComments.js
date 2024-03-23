import { Modal, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { colors } from '../helper/Color';


export const PostComments = ({comments}) => {
  const modalVisible = Boolean(comments)
  return (
  <View style={styles.container}>
    <View style={styles.interactiveContainer}>
      <AntDesign name="hearto" size={24} color={colors.backgroundlight} style={styles.icon}/>
      <FontAwesome5 name="comment-alt" size={22} color={colors.backgroundlight} style={styles.icon}/>
    </View>
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalView}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <Text>{item.comments}</Text>
          )}
          keyExtractor={item => item.id}
        />
        ListFooterComponent = {
        <TouchableOpacity onPress={() => setClickComment(false)}>
          <Text style = {styles.text}>Close</Text>
        </TouchableOpacity>}
      </View>
    </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop:10,  
  },
  interactiveContainer:{
    flexDirection: 'row',
  },
  icon:{
    margin:10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  text:{
    color:colors.fontcolor,
  }
})