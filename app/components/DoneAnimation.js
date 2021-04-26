import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function DoneAnimation({ style }, onDone) {
  return (
    <LottieView
      autoPlay
      speed={0.7}
      loop={false}
      onAnimationFinish={onDone}
      style={[{ width: "100%" }, style]}
      source={require("../animations/14422-done.json")}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DoneAnimation;
