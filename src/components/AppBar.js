import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import React from "react";

export default function AppBar(props) {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#0c4a6e"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            {props.title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
