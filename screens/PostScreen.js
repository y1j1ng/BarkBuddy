import GradientBackground from '../components/Background'
import PostItem from '../components/PostItem'
import PostComments from '../components/PostComments'
import CustomButton from '../components/PressableButton'
import { StyleSheet, Text, View, FlatList,Button,SafeAreaView,Alert, Pressable, } from 'react-native'
import React, { useState } from 'react';

export default function PostScreen() {
  const [ClickComment, setClickComment] = useState(false);

  const posts = [{id: '1', name: 'test', avatar: require("../assets/favicon.png")},
                {id: '2', name: 'test', avatar: require("../assets/favicon.png")},
                ];

  const comments =[{id: '1', name: 'test', avatar: require("../assets/favicon.png"),comments:"1"},
                  {id: '2', name: 'test', avatar: require("../assets/favicon.png"),comments:"1"},
                  {id: '3', name: 'test', avatar: require("../assets/favicon.png"),comments:"1"},]    
                            
  function handleClickComment(){
    setClickComment(true);
  }
  return (
    <GradientBackground>
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={posts}
          renderItem={({ item }) => (
            <PostItem postItemname={item.name} />
          )}
          keyExtractor={item => item.id}
        />
        {/* <CustomButton title={"See All Comments Here"} onPress={handleClickComment} />
        {ClickComment && (
          <PostComments comments={comments} />
        )} */}
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
    marginTop:0,
    marginBottom:0,
  },
})