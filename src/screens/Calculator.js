import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useRecoilState } from "recoil";
import textState from "../store/textState";

export default function CalculatorScreen() {
  const [text, setText] = useRecoilState(textState);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const increment = () => {
    setText(text + 1);
  };
  const derement = () => {
    setText(text > 0 ? text - 1 : 0);
  };

  const styles = StyleSheet.create({
    text: {
      display: "flex",
      height: windowHeight / 10,
      justifyContent: "center",
      alignItems: "flex-end",
    },
    buttons: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: windowWidth,
    },
    buttonOp: {
      width: (windowWidth - 8) / 4 - 8,
      height: windowHeight / 10,
      margin: 4,
    },
    button1: {
      width: (1.5 * (windowWidth - 8)) / 4 - 8,
      height: windowHeight / 10,
      margin: 4,
      backgroundColor: "orange",
    },
    button2: {
      width: (windowWidth - 8) / 4 - 8,
      height: windowHeight / 10,
      margin: 4,
    },
  });

  return (
    <View style={{ margin: 4 }}>
      <View style={styles.text}>
        <Text style={{ fontSize: 40 }}>{text}</Text>
      </View>
      <View style={styles.buttons}>
        <Button onPress={increment} style={styles.button1}>
          C
        </Button>
        <Button style={styles.button1} onPress={derement}>
          DEL
        </Button>
        <Button style={styles.buttonOp} onPress={derement}>
          /
        </Button>
        <Button style={styles.button2} onPress={derement}>
          7
        </Button>
        <Button style={styles.button2} onPress={derement}>
          8
        </Button>
        <Button style={styles.button2} onPress={derement}>
          9
        </Button>
        <Button style={styles.button2} onPress={derement}>
          X
        </Button>
      </View>
    </View>
  );
}
