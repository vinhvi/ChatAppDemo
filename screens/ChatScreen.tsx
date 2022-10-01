import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import NewMessageButton from "../components/NewMessageButton";
import { View } from "../components/Themed";
import chatRooms from "../data/ChatRooms";
import { RootTabScreenProps } from "../types";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
