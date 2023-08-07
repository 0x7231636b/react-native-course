import { Text, TouchableOpacity, View } from "react-native";

interface MyButtonProps {
  text: string;
  onPress?: () => void;
}

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

export function MyButton(props: MyButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#BF00BF",
          padding: "10px",
          paddingLeft: "30px",
          paddingRight: "30px",
          margin: "5px",
          borderRadius: "100px",
        }}
        onPress={props.onPress}
      >
        <Text style={{ color: "#FFFFFF" }}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
