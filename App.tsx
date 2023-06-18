import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MyButton } from "./components/MyButton";
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MyButton
        text="press me"
        onPress={() => {
          setTimeout(() => setCounter((counter) => counter + 1), 1000);
        }}
      />
      <Text>{counter}</Text>
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
