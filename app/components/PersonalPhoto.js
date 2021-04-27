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
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: Platform.OS === "android" ? "35%" : "15%",
    marginBottom: "2%",
  },
});

export default PersonalPhoto;
