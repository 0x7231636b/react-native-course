import { View } from "react-native";
import { MyButton } from "../components/MyButton";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <MyButton
        text="go to counter"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
}
