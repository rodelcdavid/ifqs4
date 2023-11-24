import { Box } from "@chakra-ui/react";
import React from "react";

function PageContent({ children }) {
  return (
    <Box padding="1rem" h="calc(100% - 6.4rem)" overflow="auto">
      {children}
    </Box>
  );
}

export default PageContent;
