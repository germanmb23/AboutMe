import React from "react";
import { useFormik, useFormikContext } from "formik";

import { Button } from "react-native";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title="sss" onPress={handleSubmit} />;
}

export default SubmitButton;
