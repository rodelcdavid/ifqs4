import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function PageHeader({ children }) {
  return (
    <Flex bgColor="blue.500" padding="0.5rem" alignItems="center">
      <Text color="#fff">{children}</Text>
    </Flex>
  );
}

export default PageHeader;
