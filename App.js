import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppCard from "./app/components/AppCard/AppCard";
import colors from "./app/config/colors";
import ListingDetailsSreen from "./app/screens/ListingDetailsSreen";
import MessagesScreen from "./app/screens/MessagesScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
