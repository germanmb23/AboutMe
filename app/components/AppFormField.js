import React from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, style, multiline, ...otherPops }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <View style={style}>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherPops}
        multiline={multiline}
      />
      <View>
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      </View>
    </View>
  );
}

export default AppFormField;
