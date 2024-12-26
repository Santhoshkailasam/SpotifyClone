import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../Source/Homescreens";
import Searchscreen from "../Source/searchscreen";
import LibraryScreen from "../Source/Libraryscreen";
import Homesvg from "./Homesvg";
import Searchsvg from "./searhsvg";
import Librarysvg from "./librarysvg";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar, // Apply black background style
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Homesvg width={size} height={size} fill={color} />;
          } else if (route.name === "Search") {
            return <Searchsvg width={size} height={size} fill={color} />;
          } else if (route.name === "Library") {
            return <Librarysvg width={size} height={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: "white", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
        headerShown: false, // Hide header
      })}
    >
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Search" component={Searchscreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black", // Set footer background color to black
    borderTopWidth: 0, // Remove top border
  },
});

export default Footer;
