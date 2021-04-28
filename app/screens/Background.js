import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

function Background({ children, style }) {
  return (
    <ImageBackground
      style={[styles.container, style]}
      blurRadius={1}
      source={require("../../assets/background.png")}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default Background;
