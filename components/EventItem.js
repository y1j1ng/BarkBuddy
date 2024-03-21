import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function EventItem() {
  return (
    <View style={styles.eventItem}>
      <Image
        style={styles.image}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        resizeMode="cover" // cropped by size
      />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>March 21st</Text>
      </View>
      <Text style={styles.eventName}>Event Name</Text>
      <View>
        <Text style={styles.eventDetail}>Location: West Georgia</Text>
        <Text style={styles.eventDetail}>Time: March 21st</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventItem: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 2, // set the height 1/2 as its width
    borderRadius: 5,
  },
  overlay: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // with opacity
    padding: 10,
    borderRadius: 5,
  },
  overlayText: {
    color: "#ffffff",
  },
  eventName: {
    fontSize: 30,
    paddingVertical: 10,
  },
  eventDetail: {
    fontSize: 20,
    paddingBottom: 5,
  },
});
