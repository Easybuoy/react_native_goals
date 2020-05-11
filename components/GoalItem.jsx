import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ id, title, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
      <View style={styles.goalContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#ccc",
    margin: 10,
    padding: 5,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
