import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function EventItem({ name, location, time, imageUrl }) {
  return (
    <View style={styles.eventItem}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover" // cropped by size
      />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{time}</Text>
      </View>
      <Text style={styles.eventName}>{name}</Text>
      <View>
        <Text style={styles.eventDetail}>Location: {location}</Text>
        <Text style={styles.eventDetail}>Time: {time}</Text>
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
