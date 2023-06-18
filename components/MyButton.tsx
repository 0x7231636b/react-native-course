import { Button, View } from "react-native";

interface MyButtonProps {
  text: string;
}

export function MyButton(props: MyButtonProps) {
  return (
    <View>
      <Button title={props.text} onPress={() => {}} />
    </View>
  );
}
