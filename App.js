import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Goals"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 5,
            width: "60%",
          }}
        />
        <Button title="Add Goals" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
