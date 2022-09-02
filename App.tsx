import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreditCard from "./src/components/CreditCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="pink" />
      <CreditCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
