import { TouchableOpacity, View } from "react-native";
import AppText from "../AppText";
import styles from "./AppButtonStyle";
import colors from "../../config/colors";

const AppButton = ({ children, variant, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[{ backgroundColor: colors[variant] }, styles.appButtonView]}
      >
        <AppText customStyle={styles.buttonText}>{children}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
