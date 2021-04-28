import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: "5%",
    fontSize: Dimensions.get("window").width * 0.03,
  },
});

export default ErrorMessage;
