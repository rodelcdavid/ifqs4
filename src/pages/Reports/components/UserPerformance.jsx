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

function UserPerformance() {
  return (
    <>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Employee ID:
        </FormLabel>
        <Input type="text" size="sm" w="10rem" isReadOnly />
        <IconButton size="sm" ml="0.5rem" icon={<FaSearch />} />
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Employee Name:
        </FormLabel>
        <Text>Rodel</Text>
      </Flex>
      <Flex>
        <FormLabel w="10rem" fontSize="sm">
          Rating
        </FormLabel>
        <Text>90</Text>
      </Flex>
    </>
  );
}

export default UserPerformance;
