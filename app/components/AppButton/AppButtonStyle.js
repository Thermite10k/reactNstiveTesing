import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  appButtonView: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    margin: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default styles;
