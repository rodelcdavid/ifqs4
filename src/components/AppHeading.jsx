import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

function AppHeading() {
  return (
    <Flex
      alignItems="center"
      gap="1rem"
      h="4rem"
      padding="0 0.5rem"
      bgColor="blue.600"
      color="#fff"
    >
      <Image src={logo} w="2.5rem" />
      <Text fontWeight="bold">IWSP Forms, Quizzes, and Surveys</Text>
      <Box
        ml="auto"
        textAlign="center"
        bgColor="orange.500"
        padding="0 0.5rem"
        borderRadius="5px"
      >
        <Text>Welcome,</Text>
        <Text fontWeight="bold">Rodel C. David!</Text>
      </Box>
    </Flex>
  );
}

export default AppHeading;
