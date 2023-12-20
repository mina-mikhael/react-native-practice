import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyComp = () => {
  return (
    <View>
      <Text style={styles.text3}>
        we can do a lot of great stuff down the road
      </Text>
    </View>
  );
};

export default MyComp;

const styles = StyleSheet.create({
  text3: {
    color: "#006187",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
});
