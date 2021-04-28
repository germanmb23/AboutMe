import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import PersonalPhoto from "../components/PersonalPhoto";
import defaultSyles from "../config/styles";
import { AboutMeInfo, name } from "../constants";
import Background from "./Background";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
function WelcomeScreen({ navigation }) {
  return (
    <Background>
      <PersonalPhoto
        style={{ height: "20%", marginTop: "30%", marginBottom: "5%" }}
      />
      <Text style={styles.text}>{name} </Text>
      <Text style={styles.text3}>Developer </Text>

      <Text style={[styles.text, { marginTop: 0 }]}>About me </Text>
      <View style={styles.texContent}>
        <Text style={styles.infoText}>{AboutMeInfo}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: defaultStyles.colors.grey,
          borderRadius: 20,
          marginTop: "5%",
          width: "80%",
          justifyContent: "space-evenly",
        }}
      >
        <Icon
          name="react"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="github"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="language-css3"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="bootstrap"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="language-html5"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="language-javascript"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="language-java"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
        <Icon
          name="dots-horizontal"
          size={Dimensions.get("window").width * 0.09}
          iconColor="#a1a1a1"
        />
      </View>
      <View style={defaultStyles.buttonsContainer}>
        <AppButton
          style={{ width: "45%", height: "40%" }}
          title="Contact me"
          onPress={() => navigation.navigate("ContactMeScreen")}
        ></AppButton>

        <AppButton
          style={{ width: "45%", height: "40%" }}
          title="My Resume"
          onPress={() => navigation.navigate("PDFReader")}
        ></AppButton>
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
    marginTop: "2%",
    backgroundColor: defaultSyles.colors.grey,
    width: "80%",
    alignContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: Dimensions.get("window").height * 0.035,
    color: defaultSyles.colors.orange,
    fontWeight: "bold",
    marginTop: "2%",
  },
  infoText: {
    padding: Dimensions.get("window").height * 0.03,
    color: "black",
    fontSize: Dimensions.get("window").height * 0.018,
  },
  text3: {
    fontSize: Dimensions.get("window").width * 0.05,
    color: defaultSyles.colors.orange,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: "2%",
  },
});

export default WelcomeScreen;
