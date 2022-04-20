import { View, Text } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View
      alignItems="center"
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
    </View>
  );
}
