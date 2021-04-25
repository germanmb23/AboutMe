import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";
import Background from "./app/screens/Background";
import ContactMeScreen from "./app/screens/ContactMeScreen";
import MainScreen from "./app/screens/MainScreen";
import WelcomeScreen from "./app/screens/MainScreen";
import AppNavigation from "./app/navigation/AppNavigation";
const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <WelcomeScreen />
    //<ContactMeScreen/>
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
