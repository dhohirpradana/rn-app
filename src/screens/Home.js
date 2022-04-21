import { View, Text, Easing } from "react-native";
import React, { useEffect, useState } from "react";
import { NeuButton, NeuSpinner } from "react-native-neu-element";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { FlatList } from "native-base";

export default function HomeScreen() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    setIsLoading(true);
    axios
      .get("http://192.168.43.205/todo/todos.php")
      .then((res) => {
        // console.log(res.data.todos);
        setTodos(res.data.todos);
        console.log(todos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  const addTodo = () => {
    firestore()
      .collection("Todos")
      .add({
        name: "tugas baru",
        isDone: false,
      })
      .then(() => {
        console.log("Todo added!");
      });
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        marginVertical: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ marginEnd: 20 }}>{item.name}</Text>
      <NeuButton
        color="#eef2f9"
        width={40}
        height={40}
        borderRadius={14}
        onPress={handleOnPress}
        style={{ marginRight: 30 }}
      >
        {status ? (
          <Entypo name="check" size={24} color="green" />
        ) : (
          <Entypo name="cross" size={24} color="grey" />
        )}
      </NeuButton>
    </View>
  );

  // const updateTodo = (id, todo) => {
  //   firestore()
  //     .collection("Todos")
  //     .doc(id)
  //     .update(todo)
  //     .then(() => {
  //       console.log("User updated!");
  //     });
  // };

  // const removeTodo = (id) => {
  //   firestore()
  //     .collection("Todos")
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //       console.log("Todo deleted!");
  //     });
  // };

  const handleOnPress = () => {
    setStatus(!status);
  };

  return (
    <View
      alignItems="center"
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <NeuSpinner
        //Required
        width={5}
        height={5}
        color="#eef2f9"
        size={50}
        indicatorColor="#aaffc3" // Mint
        //Optional
        //Determine how fast do a spinner spin one cycle
        //Default: 1000
        duration={1000}
        //Optional
        //Easing Type
        //Accept Easing from react-native-reanimated
        //Default: Easing.linear
        easingType={Easing.linear}
      /> */}
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
