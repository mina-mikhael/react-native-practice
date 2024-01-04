import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import React from "react";

const GoalsList = (props) => {
  const { goals, onDelete } = props;
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View key={itemData.item.id}>
              <Pressable
                style={({ pressed }) => {
                  return pressed
                    ? { ...styles.goalItem, ...styles.pressedItem }
                    : styles.goalItem;
                }}>
                <Text style={styles.goalText}>{`${itemData.item.id + 1}- ${
                  itemData.item.text
                }`}</Text>
                <Button
                  title="x"
                  onPress={() => onDelete(itemData.item.id)}
                  color="white"
                />
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transform: [{ scale: 1 }],
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
  pressedItem: {
    backgroundColor: "#9455e6",
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
});
