import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Background from "./Background";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import colors from "../config/colors";
import PersonalPhoto from "../components/PersonalPhoto";
import * as Yup from "yup";

import { sendMail } from "../api/sendMessage";

const validationSchema = Yup.object().shape({
  mail: Yup.string().required().min(1).label("mail").email(),
  confirmMail: Yup.string()
    .required()
    .min(1)
    .label("confirmMail")
    .test("equal", "Passwords do not match!", function (input) {
      const ref = Yup.ref("mail");
      return input == this.resolve(ref);
    })
    .email(),
  message: Yup.string().required().label("Message"),
});

function ContactMeScreen({ navigation }) {
  const handleSubmit = (values) => {
    sendMail(values);
  };
  return (
    <Background>
      <View style={styles.container}>
        <PersonalPhoto />
        <Formik
          initialValues={{ mail: "", confirmMail: "", mailBody: "" }}
          validationSchema={validationSchema}
        >
          {({ values }) => (
            <>
              <AppFormField
                name="mail"
                placeholder="Mail"
                width={"80%"}
              ></AppFormField>
              <AppFormField
                name="confirmMail"
                placeholder="Confirm mail"
                width={"80%"}
              ></AppFormField>
              <AppFormField
                numberOfLines={17}
                name="mailBody"
                placeholder="Message"
                width={"80%"}
                height={300}
                style={{ textAlignVertical: "top" }}
              ></AppFormField>

              <View style={styles.buttonsContainer}>
                <View style={{ width: "40%" }}>
                  <Button
                    borderRadius={30}
                    title="Back"
                    onPress={() => navigation.navigate("MainScreen")}
                  ></Button>
                </View>
                <View style={{ width: "40%" }}>
                  <Button
                    title="Send Message"
                    onPress={() => handleSubmit(values)}
                  ></Button>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: 100,
    width: "90%",
    height: "10%",
  },
});

export default ContactMeScreen;
