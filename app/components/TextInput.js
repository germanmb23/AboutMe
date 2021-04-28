import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { TextInput } from "react-native-gesture-handler";

function AppTextInput({ icon, width = "100%", multiline, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.orange}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={"#616161"}
        style={{
          fontSize: Dimensions.get("window").width * 0.03,
          paddingLeft: 10,
        }}
        {...otherProps}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.grey,
    borderRadius: 25,
    flexDirection: "column",
    padding: Dimensions.get("window").width * 0.01,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
