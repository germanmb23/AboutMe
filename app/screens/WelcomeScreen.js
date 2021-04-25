import React from "react";
import { View, StyleSheet, Button } from "react-native";
import ProgrammerAnimation from "../components/ProgrammerAnimation";
import Background from "./Background";

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
        <Button
          title="Know Me"
          onPress={() => navigation.navigate("MainScreen")}
        ></Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default WelcomeScreen;
