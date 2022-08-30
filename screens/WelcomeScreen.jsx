import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.imgContainer}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Lorem ipsum dolor sit.</Text>
      </View>
      <View style={styles.buttonContaier}>
        <View style={[styles.button, { backgroundColor: "#fc5c65" }]}></View>
        <View style={[styles.button, { backgroundColor: "#4ECDC4" }]}></View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: { width: 170, height: 170 },
  buttonContaier: {
    width: "100%",
  },
  button: {
    width: "100%",
    height: 50,
  },
});
export default WelcomeScreen;
