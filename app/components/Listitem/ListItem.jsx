import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText customStyle={styles.title}>{title}</AppText>
              <AppText customStyle={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: "cover",
    marginRight: 10,
  },
  subTitle: { color: colors.medium },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
