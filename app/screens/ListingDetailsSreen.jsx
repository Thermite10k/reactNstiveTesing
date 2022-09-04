import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/Listitem/ListItem";
import colors from "../config/colors";

function ListingDetailsSreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText customStyle={styles.title}>Red Jcket</AppText>
        <AppText customStyle={styles.price}>$100</AppText>
        <View style={styles.user}>
          <ListItem
            image={require("../assets/Target.bmp")}
            title={"Target"}
            subTitle={"5 Listings"}
          ></ListItem>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  user: {
    marginVertical: 40,
  },
});
export default ListingDetailsSreen;
