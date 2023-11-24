import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import React from "react";

function OverallPerformance() {
  const performance = {
    totalResponse: 531,
    totalLines: 50,
    passPercentage: 90,
    failPercentage: 10,
  };

  const { totalResponse, totalLines, passPercentage, failPercentage } =
    performance;
  return (
    <>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Total Response:
        </FormLabel>
        <Text>90</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Total Lines:
        </FormLabel>
        <Text>90</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Pass Percentage:
        </FormLabel>
        <Text>90%</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Fail Percentage:
        </FormLabel>
        <Text>10%</Text>
      </Flex>
    </>
  );
}

export default OverallPerformance;
