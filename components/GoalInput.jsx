import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Goals"
        style={styles.input}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goals" onPress={() => addGoalHandler(goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: "60%",
  },
});

export default GoalInput;
