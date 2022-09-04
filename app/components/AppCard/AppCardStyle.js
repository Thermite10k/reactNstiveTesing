import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  appCardView: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  appCardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  appCardTextContainer: {
    padding: 20,
  },
});

export default styles;
