import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ProgrammerAnimation(props) {
  return (
    <LottieView
      autoPlay
      Loop
      style={{ width: "100%" }}
      source={require("../animations/8306-programming-animation.json")}
    />
  );
}

export default ProgrammerAnimation;
