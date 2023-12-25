import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import GoalsInput from "./src/components/GoalsInput";
import GoalsList from "./src/components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [textInput, setTextInput] = useState("");

  const textInputHandler = (text) => {
    setTextInput(text);
  };

  const addGoalHandler = (textInput) => {
    setGoals([
      ...goals,
      {
        id: goals.length > 0 ? goals[goals.length - 1].id + 1 : 0,
        text: textInput,
      },
    ]);
    setTextInput("");
    console.log(goals);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appConteiner}>
      <GoalsInput
        onAddGoal={addGoalHandler}
        textInput={textInput}
        onPressHandler={textInputHandler}
      />
      <GoalsList goals={goals} onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  appConteiner: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
