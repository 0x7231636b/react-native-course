import { Button, View } from "react-native";

interface MyButtonProps {
  children: string;
  onPress?: () => void;
}

export function MyButton(props: MyButtonProps) {
  return (
    <View>
      <Button title={props.children} onPress={props.onPress} />
    </View>
  );
}
