import { View, Text } from "react-native";
import React from "react";

export default function TextButton(props) {
  return (
    <View>
      <Text style={{ fontSize: 35, color: "#4d4d4d" }}>{props.value}</Text>
    </View>
  );
}
