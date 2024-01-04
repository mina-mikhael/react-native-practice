import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import React from "react";

export default function GoalsInput(props) {
  const { textInput, onAddGoal, onPressHandler, isVisible, onCancel } = props;

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goals!"
          onChangeText={onPressHandler}
          value={textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => onAddGoal(textInput)}
              color={"white"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => onCancel()}
              color={"#ef5151"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#5e0acc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    color: "white",
    height: 40,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  button: {
    width: "35%",
    marginHorizontal: 8,
  },
});
