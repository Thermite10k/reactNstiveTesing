import { View } from "react-native";
import AppText from "../AppText";
import styles from "./AppButtonStyle";
import colors from "../../config/colors";

const AppButton = ({ children, variant }) => {
  return (
    <View style={[{ backgroundColor: colors[variant] }, styles.appButtonView]}>
      <AppText>{children}</AppText>
    </View>
  );
};

export default AppButton;
