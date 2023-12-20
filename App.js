import { StyleSheet, Text, View, Button } from "react-native";
import MyComp from "./src/MyComp";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WORLD!!</Text>
      <Text style={styles.text2}>I'm happy to use React Native</Text>
      <Text style={styles.text2}>I'm happy to use React Native</Text>
      <MyComp />
      <Button
        buttonStyle={styles.text2}
        title="Click Me!"
        onPress={() => alert("I'm happy to use React Native")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08395a",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  text2: {
    color: "#95efeb",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#9befeb",
    borderRadius: 10,
    backgroundColor: "#276d9c",
  },
});
