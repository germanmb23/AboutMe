import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

function Background({ children, style }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[{ flex: 1 }, style]}
        blurRadius={1}
        source={require("../../assets/background.png")}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Background;
