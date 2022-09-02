import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  console.log(colors);
  return (
    <View style={styles.imageScreenContainer}>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, styles.primaryColor]}></View>
        <View style={[styles.button, styles.secondaryColor]}></View>
      </View>
      <Image
        style={styles.imageContainer}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageScreenContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: colors.black,
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 70,
    height: "100%",

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
