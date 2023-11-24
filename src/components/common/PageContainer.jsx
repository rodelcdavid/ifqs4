import { Box } from "@chakra-ui/react";
import React from "react";

function PageContainer({ children }) {
  return (
    <Box padding="0.5rem" h="100%">
      <Box
        minWidth="1100px"
        border="1px solid"
        borderColor="blackAlpha.500"
        h="100%"
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageContainer;
