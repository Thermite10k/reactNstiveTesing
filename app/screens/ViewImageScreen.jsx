import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.imageScreenContainer}>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image
        style={styles.imageContainer}
        source={require("../assets/Target.bmp")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageScreenContainer: {
    paddingTop: 30,

    backgroundColor: colors.black,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    width: "100%",
    height: 70,
    top: 30,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    margin: 15,
  },
  imageContainer: {
    width: "100%",
    height: "100%",

    resizeMode: "contain",
  },
  primaryColor: {
    backgroundColor: colors.primary,
  },
  secondaryColor: {
    backgroundColor: colors.secondary,
  },
});

export default ViewImageScreen;
