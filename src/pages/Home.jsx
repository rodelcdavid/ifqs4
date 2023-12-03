import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Box, Flex } from "@chakra-ui/react";
import AppHeading from "../components/AppHeading";

function Home() {
  return (
    <Flex flexDir="column">
      <AppHeading />
      <Flex h="calc(100vh - 4rem)">
        <SideBar />
        <Box w="100%" padding="1rem" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
