import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import Slide1 from "../../../assets/Slide1.jpg";
import logo from "../../../assets/logo.png";
import ReviewCarousel from "../../Review/components/ReviewCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  closeRegisterDialog,
  openRegisterDialog,
} from "../../../slices/dialogSlice";
import RegisterDialog from "../../../components/dialogs/RegisterDialog";

const userProgress = {
  isFinished: false,
  hasStarted: false,
  score: 2,
  totalItems: 10,
};
function QuizOverviewPage() {
  const { dialogs } = useSelector((state) => state.dialogState);
  const params = useParams();
  const { code, type } = params;
  const navigate = useNavigate();
  //get user progress first using the valid code and username

  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(openRegisterDialog({ handleConfirm: handleConfirm }));
  };

  const handleConfirm = () => {
    dispatch(closeRegisterDialog());
    navigate("answer");
  };

  // if already answered, redirect to results

  useEffect(() => {
    if (userProgress.isFinished) {
      navigate(`/assessment/${type}/${code}/results`, {
        state: {
          score: userProgress.score,
          totalScore: userProgress.totalItems,
        },
      });
    }

    if (userProgress.hasStarted) {
      navigate(`/assessment/${type}/${code}/answer`);
    }
  }, [code, type, navigate]);
  return (
    <Flex
      h="100%"
      alignItems="center"
      flexDir="column"
      gap="1rem"
      w="30rem"
      m="0 auto"
    >
      {/* Overview */}
      <Text
        fontWeight="bold"
        fontSize="3.5rem"
        textAlign="center"
        color="blue.600"
      >
        PK e-Learning
      </Text>
      <Flex
        justifyContent="center"
        w="50rem"
        boxShadow="lg"
        border="1px solid"
        borderColor="blackAlpha.400"
      >
        <ReviewCarousel />
      </Flex>
      <Button onClick={handleRegister} colorScheme="blue" w="10rem">
        Register
      </Button>
      {dialogs.registerDialog.isOpen && <RegisterDialog />}
    </Flex>
  );
}

export default QuizOverviewPage;
