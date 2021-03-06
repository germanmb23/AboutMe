import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Background from "./Background";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import PersonalPhoto from "../components/PersonalPhoto";
import * as Yup from "yup";

import { sendMail } from "../api/sendMessage";
import UploadScreen from "../components/UploadScreen";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

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
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setUploadVisible(true);

    const result = await sendMail(values);
    resetForm();
  };
  return (
    <Background>
      <UploadScreen
        Screen
        onDone={() => setUploadVisible(false)}
        source={require("../animations/14422-done.json")}
        visible={uploadVisible}
      />

      <View style={styles.container}>
        <PersonalPhoto />

        <Formik
          initialValues={{
            mail: "",
            confirmMail: "",
            mailBody: "",
          }}
          validationSchema={validationSchema}
        >
          {({ values, resetForm }) => (
            <>
              <AppFormField
                numberOfLines={1}
                name="mail"
                placeholder="Mail"
                width={"80%"}
              ></AppFormField>
              <AppFormField
                numberOfLines={1}
                name="confirmMail"
                placeholder="Confirm mail"
                width={"80%"}
              ></AppFormField>
              <AppFormField
                numberOfLines={10}
                name="mailBody"
                placeholder="Message"
                width={"80%"}
                height={"25%"}
              ></AppFormField>

              <View style={defaultStyles.buttonsContainer}>
                <AppButton
                  style={{ width: "45%" }}
                  title="Back"
                  onPress={() => navigation.navigate("MainScreen")}
                ></AppButton>

                <AppButton
                  style={{ width: "45%" }}
                  title="Send Message"
                  onPress={() => handleSubmit(values, resetForm)}
                ></AppButton>
                {/* <View style={{ width: "40%" }}>
                  <Button
                    borderRadius={30}
                    title="Back"
                    onPress={() => navigation.navigate("MainScreen")}
                  ></Button>
                </View>
                <View style={{ width: "40%" }}>
                  <Button
                    title="Send Message"
                    onPress={() => handleSubmit(values, resetForm)}
                  ></Button>
                </View>      */}
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
});

export default ContactMeScreen;
