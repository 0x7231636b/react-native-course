import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MyButton } from "../components/MyButton";
import React from "react";

// react documentation for useEffect:
// https://react.dev/reference/react/useEffect#useeffect

// useEffect runs once when an empty dependency array is declared []
// useEffect runs every time when no dependency array is declared
// useEffect runs every time a dependency from the dependency array changes [a, b, c]

// Example of component class style development to show how useEffect
// handles those kind of operations

// class Welcome extends React.Component {
// componentDidMount() {

// }
// componentDidUpdate() {

// }
// componentWillUnmount() {

// }
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

export default function CounterScreen({ navigation }) {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    // entered screen / componentDidMount
    console.log("useEffect called");

    console.log("State Counter:", counter);

    return () => {
      console.log("component left");
      // Exit screen / componentWillUnmount
    };
  }, [counter]);

  return (
    <View style={styles.container}>
      <MyButton text="go back" onPress={() => navigation.navigate("Home")} />
      <MyButton
        text="counter++"
        onPress={() => {
          // timeout only for demonstration purposes of useState
          setTimeout(() => setCounter((counter) => counter + 1), 100);
        }}
      />
      <MyButton
        text="counter--"
        onPress={() => {
          // timeout only for demonstration purposes of useState
          setTimeout(() => setCounter((counter) => counter - 1), 100);
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
