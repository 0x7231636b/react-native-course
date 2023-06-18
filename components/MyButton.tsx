import { Button, View } from "react-native";

interface MyButtonProps {
  text: string;
  onPress?: () => void;
}

export function MyButton(props: MyButtonProps) {
  return (
    <View>
      <Button title={props.text} />
    </View>
  );
}
