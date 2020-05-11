import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals([...goals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  };

  const onGoalDelete = (id) => {
    setGoals((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  };

  const cancelIsAddMode = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput addGoalHandler={addGoalHandler} onCancel={cancelIsAddMode} isAddMode={isAddMode} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={onGoalDelete}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
