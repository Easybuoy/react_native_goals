import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Text>{props.title}</Text>
    </View>
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
