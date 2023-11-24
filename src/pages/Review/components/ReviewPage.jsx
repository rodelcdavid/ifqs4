import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReviewCarousel from "./ReviewCarousel";

function ReviewPage() {
  return (
    <Box>
      <Text>Review</Text>
      <Flex justifyContent="center" w="50rem" boxShadow="lg">
        <ReviewCarousel />
      </Flex>
    </Box>
  );
}

export default ReviewPage;
