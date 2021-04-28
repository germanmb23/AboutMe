import React from "react";
import { View, StyleSheet } from "react-native";
import ProgrammerAnimation from "../components/ProgrammerAnimation";
import Background from "./Background";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <Background style={styles.container}>
      <ProgrammerAnimation />

      <AppButton
        title="Know Me"
        onPress={() => navigation.navigate("MainScreen")}
        style={{ width: "30%", marginTop: 10, padding: 5 }}
      ></AppButton>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
});

export default WelcomeScreen;
