import { Button, View } from "react-native";

export function MyButton({ text }) {
  return (
    <View>
      <Button title={text} onPress={() => {}} />
    </View>
  );
}
