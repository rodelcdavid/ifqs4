import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function QuizResults() {
  const location = useLocation();
  const { score, totalScore, type, code } = location.state;
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(`/assessment/${type}/${code}/answer`);
  };
  return (
    <Flex flexDir="column" alignItems="center" h="100%">
      <Text fontWeight="bold" fontSize="5rem">
        RESULTS:
      </Text>
      <Text fontSize="5rem">
        Score: {score}/{totalScore}
      </Text>

      {score <= 7 && (
        <Button onClick={handleRetry} colorScheme="orange">
          Retry
        </Button>
      )}
    </Flex>
  );
}

export default QuizResults;
