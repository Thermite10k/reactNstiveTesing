import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "black",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
