import GradientBackground from '../components/Background'
import PostItem from '../components/PostItem'
import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, } from 'react-native'
import React from 'react'

export default function PostScreen() {
  const posts = [{id: '1', name: 'test', avatar: require("../assets/favicon.png")},
                {id: '2', name: 'test', avatar: require("../assets/favicon.png")},
                ];
  return (
    <GradientBackground>
    <View style={styles.container}>
      <FlatList style={styles.listContainer}
      data = {posts}
      renderItem={({ item }) => (
        <PostItem postItemname={item.name}/>
      )}
      />
      <Text>PostScreen</Text>
    </View>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
 //   background:background,
    justifyContent:"center",
  },
  listContainer:{
    marginTop:30,
    marginBottom:30,
  },
})