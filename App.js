import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>이게 보이나요?! 아름이 잘 해봅시다!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// view와 text에 대해 잘 알아두자

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
