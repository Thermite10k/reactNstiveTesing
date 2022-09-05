import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/Listitem/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "t1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime.",
    image: require("../assets/Target.bmp"),
  },
  {
    id: 2,
    title: "t2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime.",
    image: require("../assets/Target.bmp"),
  },
  {
    id: 3,
    title: "t3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime.",
    image: require("../assets/Target.bmp"),
  },
  {
    id: 4,
    title: "t4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime.",
    image: require("../assets/Target.bmp"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
};

export default MessagesScreen;
