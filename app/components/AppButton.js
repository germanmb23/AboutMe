import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

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
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
