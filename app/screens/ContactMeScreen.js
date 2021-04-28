import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Background from "./Background";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import PersonalPhoto from "../components/PersonalPhoto";
import * as Yup from "yup";

import { sendMail } from "../api/sendMessage";
import UploadScreen from "../components/UploadScreen";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";

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
  mailBody: Yup.string().required().label("Message"),
});

function ContactMeScreen({ navigation }) {
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleSubmit = async (values, errors, resetForm) => {
    const empty =
      values.mail == "" && values.confirmMail == "" && values.mailBody == "";
    //a@a.com
    if (
      values.mail != "" &&
      values.confirmMail != "" &&
      values.mailBody != "" &&
      errors != {}
    ) {
      await sendMail(values).then((result) => {
        if (result) {
          setUploadVisible(true);
          resetForm;
        } else alert("There was a problem sending message");
      });
    } else if (empty) Alert.alert("", "Complete fields");
    else Alert.alert("", "Check fields");
  };
  return (
    <Background>
      <UploadScreen
        Screen
        onDone={() => setUploadVisible(false)}
        source={require("../animations/14422-done.json")}
        visible={uploadVisible}
      />

      <PersonalPhoto
        style={{ height: "20%", marginTop: "20%", marginBottom: "5%" }}
      />

      <Formik
        initialValues={{
          mail: "",
          confirmMail: "",
          mailBody: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm, errors }) => (
          <>
            <AppFormField
              numberOfLines={1}
              name="mail"
              placeholder="Mail"
              multiline={false}
              width={"80%"}
              style={{ height: "11%", width: "80%" }}
              padding={"2%"}
            ></AppFormField>
            <AppFormField
              numberOfLines={1}
              name="confirmMail"
              placeholder="Confirm mail"
              width={"80%"}
              multiline={false}
              style={{ height: "11%", width: "80%" }}
              padding={"2%"}
            ></AppFormField>
            <AppFormField
              numberOfLines={10}
              name="mailBody"
              placeholder="Message"
              width={"80%"}
              height={"80%"}
              style={{ height: "30%", width: "80%" }}
            ></AppFormField>

            <View style={defaultStyles.buttonsContainer}>
              <AppButton
                style={{ width: "45%", height: "40%" }}
                title="Back"
                onPress={() => navigation.navigate("MainScreen")}
              ></AppButton>

              <AppButton
                style={{ width: "45%", height: "40%" }}
                title="Send Message"
                onPress={() => handleSubmit(values, errors, resetForm())}
              ></AppButton>
            </View>
          </>
        )}
      </Formik>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ContactMeScreen;
