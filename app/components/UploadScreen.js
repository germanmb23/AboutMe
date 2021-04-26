import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import LottieView from "lottie-react-native";
import DoneAnimation from "./DoneAnimation";
import Background from "../screens/Background";

function UploadScreen({ onDone, visible = false, source, ...otherProps }) {
  return (
    <Modal visible={visible}>
      <Background>
        <View style={styles.container}>
          <LottieView
            autoPlay
            duration={1200}
            speed={1.8}
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animations}
            source={source}
            {...otherProps}
          />
        </View>
      </Background>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,

    justifyContent: "center",
  },
  animations: { width: "60%" },
});

export default UploadScreen;
