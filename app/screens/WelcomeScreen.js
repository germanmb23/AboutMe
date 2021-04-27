import React from "react";
import { View, StyleSheet } from "react-native";
import ProgrammerAnimation from "../components/ProgrammerAnimation";
import Background from "./Background";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <Background style={styles.container}>
      <ProgrammerAnimation />
      <View
        style={{
          width: "40%",
          marginTop: 40,
        }}
      >
        <AppButton
          title="Know Me"
          onPress={() => navigation.navigate("MainScreen")}
        ></AppButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default WelcomeScreen;
