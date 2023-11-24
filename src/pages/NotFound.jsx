import { Box, Text } from "@chakra-ui/react";
import React from "react";

function NotFound() {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Text fontSize="5rem">Error 404</Text>
      <Text fontSize="2rem">Not Found!</Text>
    </Box>
  );
}

export default NotFound;
