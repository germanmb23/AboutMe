import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Text,
  Button,
} from "react-native";

import defaultSyles from "../config/styles";
import { AboutMeInfo, name } from "../constants";

function WelcomeScreen(s) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      blurRadius={1}
      source={require("../../assets/background.png")}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={require("../../assets/me.png")} />
        <Text style={styles.text}>{name} </Text>
        <Text style={styles.text3}>Developer </Text>

        <Text style={styles.text}>About me </Text>
        <View style={styles.texcContent}>
          <Text style={styles.infoText}>{AboutMeInfo}</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Button title="Contact me"></Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  photo: {
    marginTop: 150,
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  texcContent: {
    marginTop: 10,
    backgroundColor: "rgb(222, 222, 222)",
    width: "70%",
    alignContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 30,
    color: defaultSyles.colors.orange,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoText: {
    padding: 30,
    color: "black",
  },
  text3: {
    fontSize: 20,
    color: defaultSyles.colors.orange,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
