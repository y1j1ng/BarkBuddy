import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "../screens/PostScreen";
import EventScreen from "../screens/EventScreen";
import MapScreen from "../screens/MapScreen";
import MessageScreen from "../screens/MessageScreen";
import UserScreen from "../screens/UserScreen";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function addEventHandler() {}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerTitle: "Posts",
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          headerTitle: "Events",
          headerRight: () => (
            <Pressable onPress={() => addEventHandler()} style={{ margin: 10 }}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitle: "Map",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerTitle: "Messages",
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerTitle: "User",
        }}
      />
    </Tab.Navigator>
  );
}
