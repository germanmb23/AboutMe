import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

function Background({ children, style }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[
          {
            height: Dimensions.get("window").height + 100,
            position: "relative",
          },
          style,
        ]}
        blurRadius={1}
        source={require("../../assets/background.png")}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default Background;
