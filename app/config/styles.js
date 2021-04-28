import colors from "./colors";
import { Dimensions } from "react-native";

export default {
  colors,
  tetx: {
    fontSize: 30,
    color: "#f28f18",
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: "10%",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.03,
    justifySelf: "flex-end",
  },
};
