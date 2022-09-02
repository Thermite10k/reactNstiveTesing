import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton/AppButton";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText>Lorem ipsum dolor sit.</AppText>
      </View>
      <View style={styles.buttonContaier}>
        <AppButton variant="secondary">
          <Text style={styles.buttonText}>Register</Text>
        </AppButton>
        <AppButton variant="primary">
          <Text style={styles.buttonText}>Login</Text>
        </AppButton>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
  buttonContaier: {
    width: "100%",
  },
  button: {
    width: "100%",
    height: 50,
  },
  buttonContaier: {
    width: "100%",
  },
  buttonText: { color: "white", fontWeight: "800", fontSize: 20 },
});
export default WelcomeScreen;
