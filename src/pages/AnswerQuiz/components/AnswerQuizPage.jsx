import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { questions } from "../../../questions";
import { useNavigate, useParams } from "react-router-dom";
import correct from "../../../assets/correct.png";
import wrong from "../../../assets/wrong.png";
function AnswerQuizPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { type, code } = params;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestionIndex];
  const onClickAnswer = (answer, aIndex) => {
    /* 
    if correct
    change bgColor of correct answer
    else
    change bgcolor of selected answer to red
    change bgcolor of correct answer to green
    */
    if (!isAnswered) {
      setIsAnswered(true);
      setSelectedAnswer(aIndex);

      if (answer.isCorrect) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const setBgColor = (answer, index) => {
    if (isAnswered) {
      if (answer.isCorrect) {
        return "green.500";
      } else {
        if (index === selectedAnswer) {
          return "red.500";
        } else {
          return "blue.500";
        }
      }
    }
    return "blue.500";
  };

  const handleNext = () => {
    //if meron pa
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      //go to result page
      navigate(`/assessment/${type}/${code}/results`, {
        state: { type, code, score, totalScore: questions.length },
      });
    }
  };

  const optionLetters = ["A.", "B.", "C.", "D."];
  return (
    <>
      <Flex flexDir="column" textAlign="center" gap="1rem">
        <Heading as="h3" size="md">
          {currentQuestionIndex + 1}. {question.questionText}
        </Heading>
        {question.answerOptions.map((answer, aIndex) => (
          <>
            <Flex
              // key={aIndex}
              onClick={() => onClickAnswer(answer, aIndex)}
              gap="1rem"
              textAlign="left"
              w="40rem"
              m="0 auto"
              cursor={isAnswered ? "default" : "pointer"}
              padding="1rem"
              borderRadius="10px"
              bgColor={setBgColor(answer, aIndex)}
              color="#fff"
              position="relative"
              _hover={
                !isAnswered
                  ? {
                      bgColor: "orange.500",
                      color: "#fff",
                      transform: "scale(1.05)",
                      transition: "100ms all ease-in",
                    }
                  : "default"
              }
              _after={{
                content: answer.isCorrect
                  ? `"CORRECT"`
                  : aIndex === selectedAnswer
                  ? `"WRONG"`
                  : `""`,
                position: "absolute",
                left: "-100px",
                color: answer.isCorrect ? "green.500" : "red.500",
                fontWeight: "bold",
                textAlign: "center",
                display: isAnswered ? "block" : "none",
              }}
            >
              <Text>{optionLetters[aIndex]}</Text>
              <Text>{answer.answerText}</Text>
            </Flex>
          </>
        ))}
        {isAnswered && (
          <Button onClick={handleNext} w="10rem" m="0 auto" colorScheme="blue">
            Next
          </Button>
        )}
      </Flex>

      {/* {questions.map((question, qIndex) => (
        <Flex flexDir="column" key={qIndex} textAlign="center" gap="1rem">
          <Heading as="h3" size="md">
            {question.questionText}
          </Heading>
          {question.answerOptions.map((answer, aIndex) => (
            <Flex
              key={aIndex}
              onClick={() => onClickAnswer(answer, aIndex)}
              gap="1rem"
              textAlign="left"
              w="40rem"
              m="0 auto"
              cursor={isAnswered ? "default" : "pointer"}
              padding="1rem"
              borderRadius="10px"
              bgColor={setBgColor(answer, aIndex)}
              color="#fff"
              _hover={
                !isAnswered
                  ? {
                      bgColor: "orange.500",
                      color: "#fff",
                      transform: "scale(1.05)",
                      transition: "100ms all ease-in",
                    }
                  : "default"
              }
            >
              <Text>{optionLetters[aIndex]}</Text>
              <Text>{answer.answerText}</Text>
            </Flex>
          ))}
          {isAnswered && <Button>Next</Button>}
        </Flex>
      ))} */}
    </>
  );
}

export default AnswerQuizPage;
