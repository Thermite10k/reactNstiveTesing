import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
const Screen = ({ children, customStyle }) => {
  return (
    <SafeAreaView style={[styles.screen, customStyle]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
