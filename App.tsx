import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MyButton } from "./components/MyButton";
import React from "react";

export default function App() {
  const [textChangeLabel, setTextChangeLabel] = React.useState(
    "This text need to change on button tap!"
  );

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MyButton
        text="press me"
        onPress={() => {
          setTextChangeLabel("New text");
        }}
      />
      <Text>{textChangeLabel}</Text>
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
