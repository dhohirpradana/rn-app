import { View, Text, StyleSheet, Dimensions } from "react-native";
import { NeuButton } from "react-native-neu-element";
import TextButton from "../components/calculator/TextButton";
import { useCalculator } from "../hooks/calculator";

export default function CalculatorScreen() {
  const {
    beforeNumber,
    number,
    cleanNumber,
    negativeNumber,
    deleteLastNumber,
    divide,
    combineNumber,
    multiply,
    increment,
    decrement,
    operation,
  } = useCalculator();

  return (
    <View style={{ margin: 8 }}>
      <View style={styles.textArea}>
        {beforeNumber !== "0" && (
          <Text style={{ fontSize: 50, color: "#4d4d4d" }}>{beforeNumber}</Text>
        )}
        <Text
          style={{ fontSize: 50, color: "#4d4d4d" }}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {number}
        </Text>
      </View>

      <View style={styles.buttons}>
        <NeuButton
          onPress={cleanNumber}
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="C" />
        </NeuButton>
        <NeuButton
          onPress={negativeNumber}
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="+/-" />
        </NeuButton>
        <NeuButton
          onPress={deleteLastNumber}
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="DEL" />
        </NeuButton>
        <NeuButton
          onPress={divide}
          color="#eef2f9"
          width={styles.buttonOp.width}
          height={styles.buttonOp.height}
          borderRadius={16}
          style={styles.buttonOp}
        >
          <TextButton value="/" />
        </NeuButton>

        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="7" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="8" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="9" />
        </NeuButton>
        <NeuButton
          onPress={multiply}
          color="#eef2f9"
          width={styles.buttonOp.width}
          height={styles.buttonOp.height}
          borderRadius={16}
          style={styles.buttonOp}
        >
          <TextButton value="*" />
        </NeuButton>

        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="4" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="5" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="6" />
        </NeuButton>
        <NeuButton
          onPress={decrement}
          color="#eef2f9"
          width={styles.buttonOp.width}
          height={styles.buttonOp.height}
          borderRadius={16}
          style={styles.buttonOp}
        >
          <TextButton value="-" />
        </NeuButton>

        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="1" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="2" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button2.width}
          height={styles.button2.height}
          borderRadius={16}
          style={styles.button2}
        >
          <TextButton value="3" />
        </NeuButton>
        <NeuButton
          onPress={increment}
          color="#eef2f9"
          width={styles.buttonOp.width}
          height={styles.buttonOp.height}
          borderRadius={16}
          style={styles.buttonOp}
        >
          <TextButton value="+" />
        </NeuButton>

        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button1.width}
          height={styles.button1.height}
          borderRadius={16}
          style={styles.button1}
        >
          <TextButton value="0" />
        </NeuButton>
        <NeuButton
          onPress={(event) =>
            combineNumber(
              event._dispatchInstances.memoizedProps.children[0].props.children
                .props.value
            )
          }
          color="#eef2f9"
          width={styles.button1.width}
          height={styles.button1.height}
          borderRadius={16}
          style={styles.button1}
        >
          <TextButton value="." />
        </NeuButton>
        <NeuButton
          onPress={operation}
          color="#eef2f9"
          width={styles.buttonOp.width}
          height={styles.buttonOp.height}
          borderRadius={16}
          style={styles.buttonOp}
        >
          <TextButton value="=" />
        </NeuButton>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  textArea: {
    padding: 4,
    display: "flex",
    height: windowHeight / 4.1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: windowWidth,
  },
  buttonOp: {
    width: (windowWidth - 8) / 4 - 12,
    height: windowHeight / 10,
    margin: 8,
  },
  button1: {
    width: (1.5 * (windowWidth - 8)) / 4 - 22,
    height: windowHeight / 10,
    margin: 8,
  },
  button2: {
    width: (windowWidth - 8) / 4 - 20,
    height: windowHeight / 10,
    margin: 8,
  },
});
