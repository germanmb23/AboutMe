import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native";
import PersonalPhoto from "../components/PersonalPhoto";

import defaultSyles from "../config/styles";
import { AboutMeInfo, name } from "../constants";
import Background from "./Background";

function WelcomeScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <PersonalPhoto />
        <Text style={styles.text}>{name} </Text>
        <Text style={styles.text3}>Developer </Text>

        <Text style={styles.text}>About me </Text>
        <View style={styles.texContent}>
          <Text style={styles.infoText}>{AboutMeInfo}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ width: "40%" }}>
            <Button
              borderRadius={30}
              title="Contact me"
              onPress={() => navigation.navigate("ContactMeScreen")}
            ></Button>
          </View>
          <View style={{ width: "40%" }}>
            <Button title="Download Resume"></Button>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: 100,
    width: "90%",
    height: "10%",
  },
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
