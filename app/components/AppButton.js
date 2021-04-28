import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

function AppButton({ title, style, color = "black", onPress }) {
  return (
    <TouchableOpacity
      pressMagnification={0.1}
      style={{
        ...styles.button,
        ...style,
        ...{ backgroundColor: "dodgerblue" },
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: Dimensions.get("window").width * 0.03,
    textTransform: "uppercase",
  },
});
