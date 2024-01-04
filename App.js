import { StyleSheet, View, Button } from "react-native";
import React, { useState } from "react";
import GoalsInput from "./src/components/GoalsInput";
import GoalsList from "./src/components/GoalsList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const textInputHandler = (text) => {
    setTextInput(text);
  };

  function startAddGoal() {
    setIsModalVisible(true);
  }

  function cancelAddGoal() {
    setIsModalVisible(false);
  }

  const addGoalHandler = (textInput) => {
    setGoals([
      ...goals,
      {
        id: goals.length > 0 ? goals[goals.length - 1].id + 1 : 0,
        text: textInput,
      },
    ]);
    setTextInput("");
    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appConteiner}>
        <GoalsInput
          onAddGoal={addGoalHandler}
          textInput={textInput}
          onPressHandler={textInputHandler}
          isVisible={isModalVisible}
          onCancel={cancelAddGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add New Goal" color="white" onPress={startAddGoal} />
        </View>
        <GoalsList goals={goals} onDelete={handleDelete} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appConteiner: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: "#995ed799",
    borderRadius: 5,
    padding: 10,
    marginVertical: 25,
  },
});
