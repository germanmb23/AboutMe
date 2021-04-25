import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";
import Background from "./app/screens/Background";
import ContactMeScreen from "./app/screens/ContactMeScreen";
import MainScreen from "./app/screens/MainScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppNavigation from "./app/navigation/AppNavigation";
const Stack = createStackNavigator();

import useApi from "./app/hooks/useApi";

const axios = require("axios").default;

export default function App() {
  // {
  //   console.log(1);
  //   const { data } = axios.post(`https://aboutme-backend.herokuapp.com/`, {
  //     mail: "asdasd",
  //     mailBody: "asdasdasdasd",
  //   });
  //   console.log(2);
  // }s

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
