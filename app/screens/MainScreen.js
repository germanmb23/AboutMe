import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PersonalPhoto from "../components/PersonalPhoto";

import defaultSyles from "../config/styles";
import { AboutMeInfo, name } from "../constants";
import Background from "./Background";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

function WelcomeScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <PersonalPhoto />
        <Text style={styles.text}>{name} </Text>
        <Text style={styles.text3}>Developer </Text>

        <Text style={[styles.text, { marginTop: 0 }]}>About me </Text>
        <View style={styles.texContent}>
          <Text style={styles.infoText}>{AboutMeInfo}</Text>
        </View>
        <View style={defaultStyles.buttonsContainer}>
          <AppButton
            style={{ width: "45%" }}
            title="Contact me"
            onPress={() => navigation.navigate("ContactMeScreen")}
          ></AppButton>

          <AppButton
            style={{ width: "45%" }}
            title="My Resume"
            onPress={() => navigation.navigate("PDFReader")}
          ></AppButton>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },

  texContent: {
    marginTop: 10,
    backgroundColor: defaultSyles.colors.grey,
    width: "80%",
    alignContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 30,
    color: defaultSyles.colors.orange,
    fontWeight: "bold",
    marginTop: "2%",
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
    marginBottom: "2%",
  },
});

export default WelcomeScreen;
