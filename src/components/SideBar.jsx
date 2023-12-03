import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../slices/authSlice";

function SideBar() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const publicSidebar = [
    {
      name: "Assessment",
      link: "/assessment",
    },
  ];

  const privateSidebar = [
    {
      name: "My Forms",
      link: "my-forms",
    },
    {
      name: "Reports",
      link: "/reports",
    },
  ];

  const sidebar = isUserAuthenticated ? privateSidebar : publicSidebar;

  return (
    <Flex
      flexDir="column"
      w="20rem"
      borderRight="1px solid"
      borderColor="blackAlpha.400"
      paddingBottom="1rem"
    >
      {sidebar.map((item, index) => (
        <Link
          key={index}
          as={NavLink}
          to={item.link}
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
          {item.name}
        </Link>
      ))}

      {/* <Link
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
      </Link> */}
      {isUserAuthenticated && (
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
      )}
    </Flex>
  );
}

export default SideBar;
