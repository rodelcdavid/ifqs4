import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

function LinePerformance() {
  return (
    <>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Line/Section Code:
        </FormLabel>
        <Input type="text" size="sm" w="10rem" isReadOnly />
        <IconButton size="sm" ml="0.5rem" icon={<FaSearch />} />
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Line/Section Name:
        </FormLabel>
        <Text>Information Technology</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Total Response:
        </FormLabel>
        <Text>123</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Pass Percentage
        </FormLabel>
        <Text>90</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Line/Section Code:
        </FormLabel>
        <Text>10</Text>
      </Flex>
    </>
  );
}

export default LinePerformance;
