import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../slices/authSlice";

function SideBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Flex
      flexDir="column"
      w="20rem"
      borderRight="1px solid"
      borderColor="blackAlpha.400"
      paddingBottom="1rem"
    >
      <Link
        as={NavLink}
        to="/my-forms"
        display="block"
        textAlign="center"
        _hover={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
        _activeLink={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
      >
        My Forms
      </Link>

      <Link
        as={NavLink}
        to="/assessment"
        display="block"
        textAlign="center"
        _hover={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
        _activeLink={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
      >
        Assessment
      </Link>
      <Link
        as={NavLink}
        to="/reports"
        display="block"
        textAlign="center"
        _hover={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
        _activeLink={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
      >
        Reports
      </Link>

      <Link
        as={NavLink}
        onClick={handleLogout}
        display="block"
        color="red.500"
        borderTop="1px solid"
        borderColor="blackAlpha.400"
        textAlign="center"
        mt="auto"
        _hover={{
          textDecor: "none",
          fontWeight: "bold",
          bgColor: "gray.200",
        }}
      >
        Log Out
      </Link>
    </Flex>
  );
}

export default SideBar;
