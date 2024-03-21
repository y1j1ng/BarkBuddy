import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import EventItem from "../components/EventItem";

export default function EventScreen() {
  return (
    <View>
      <EventItem />
      <EventItem />
    </View>
  );
}

const styles = StyleSheet.create({});
