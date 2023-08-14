import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CounterScreen from "./screens/CounterScreen";

const Stack = createNativeStackNavigator();

// Next Session:
// Styling of all texts and Background
// Color scheme created with: https://color.adobe.com/create/color-wheel
// primary
// #BF00BF
// primary accent
// #FF5CFF
// primary accent 2
// #CC00CC
// secondary
// #FFFFFF
// secondary accent
// #FFB2FF

export default function App() {
  // For screen navigation documentation see:
  // https://reactnative.dev/docs/navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
