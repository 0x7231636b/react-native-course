import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyButton } from "./components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MyButton>Press me again</MyButton>
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
