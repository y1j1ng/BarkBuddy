import { StyleSheet, Text, View, Image } from 'react-native'; 
import React from 'react'

export default function PostItem(postItemname,postitemavator) {

  return (
    <View style={styles.container}>
      <View style={styles.userinformationContainer}>
        <Image
          source={postitemavator}
          style={styles.avatorContainer}
        />
      <Text>{postItemname}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatorContainer:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userinformationContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  listContainer:{
    marginTop:30,
    marginBottom:30,
  },
})