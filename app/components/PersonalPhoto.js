import React from "react";
import { View, StyleSheet, Image } from "react-native";

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
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 110,
    marginBottom: 30,
  },
});

export default PersonalPhoto;
