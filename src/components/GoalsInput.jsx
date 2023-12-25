import { StyleSheet, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

export default function GoalsInput(props) {
  const { textInput, onAddGoal, onPressHandler } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add your goals!"
        onChangeText={onPressHandler}
        value={textInput}
      />
      <Button title="Add Goal" onPress={() => onAddGoal(textInput)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
