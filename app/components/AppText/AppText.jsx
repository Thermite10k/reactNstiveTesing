import { Text, StyleSheet, Platform } from "react-native";

import styles from "./styles";

const AppText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default AppText;
