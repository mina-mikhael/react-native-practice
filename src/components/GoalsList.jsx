import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";

const GoalsList = (props) => {
  const { goals, onDelete } = props;
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View>
              <View key={itemData.item.id} style={styles.goalItem}>
                <Text style={styles.goalText}>{`${itemData.item.id + 1}- ${
                  itemData.item.text
                }`}</Text>
                <Button
                  title="x"
                  onPress={() => onDelete(itemData.item.id)}
                  color="white"
                />
              </View>
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
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
});
