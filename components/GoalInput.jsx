import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, isAddMode, onCancel }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const onAddGoalHandler = () => {
    addGoalHandler(goal);
    setGoal("");
  };

  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />

        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={onAddGoalHandler} />
          <Button title="Cancel" color="red" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GoalInput;
