import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ContactMeScreen from "../screens/ContactMeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import PDFreaderComponent from "../components/PDFReaderComponent";

function AppNavigation(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactMeScreen"
        component={ContactMeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PDFReader"
        component={PDFreaderComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigation;
