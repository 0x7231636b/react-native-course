import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MyButton } from "./components/MyButton";

export default function App() {
  let text = "This text need to change on button tap!";
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MyButton
        text="press me"
        onPress={() => {
          text = "New text";
        }}
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
