import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ProgrammerAnimation(style) {
  return (
    <LottieView
      autoPlay
      Loop
      style={[{ width: "100%" }, style]}
      source={require("../animations/8306-programming-animation.json")}
    />
  );
}

export default ProgrammerAnimation;
