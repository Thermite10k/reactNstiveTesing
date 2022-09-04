import { View, Image } from "react-native";
import AppText from "../AppText";
import styles from "./AppCardStyle";
const AppCard = ({ image, title, subTitle }) => {
  return (
    <View style={styles.appCardView}>
      <Image style={styles.appCardImage} source={image} />
      <View style={styles.appCardTextContainer}>
        <AppText customStyle={styles.appCardTitle}>{title}</AppText>
        <AppText customStyle={styles.appCardSubTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;
