import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Settings";
import CalculatorScreen from "./src/screens/Calculator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { useRecoilState } from "recoil";
import textState from "./src/store/textState";
const Tab = createBottomTabNavigator();

export default function Container() {
  const [text, setText] = useRecoilState(textState);
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Calculator") {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary["800"],
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarBadge: text ? text : null }}
        />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
