import React from "react";
import { StyleSheet, Image } from "react-native";

function PersonalPhoto({ style }) {
  return (
    <Image
      style={[styles.photo, style]}
      source={require("../../assets/me.png")}
    />
  );
}

const styles = StyleSheet.create({
  photo: {
    alignItems: "center",
    borderRadius: 100,
    marginBottom: "2%",
    aspectRatio: 1,
  },
});

export default PersonalPhoto;
