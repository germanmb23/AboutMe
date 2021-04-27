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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    width: "80%",
    height: "10%",
    marginTop: Dimensions.get("window").height - 100,
  },
};
