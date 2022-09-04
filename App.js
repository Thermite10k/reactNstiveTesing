import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppCard from "./app/components/AppCard/AppCard";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <AppCard
        image={require("./app/assets/jacket.jpg")}
        title="testTilte"
        subTitle="$100"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardView,
    padding: 20,
    paddingTop: 40,
  },
});
