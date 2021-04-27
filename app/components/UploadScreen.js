import React from "react";
import { View, StyleSheet, Modal, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import Background from "../screens/Background";

function UploadScreen({ onDone, visible = false, source, ...otherProps }) {
  return (
    <Modal visible={visible} transparent={true}>
      <Background style={{ marginTop: -StatusBar.currentHeight - 7 }}>
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
    marginTop: "60%",
  },
  animations: { width: "60%" },
});

export default UploadScreen;
