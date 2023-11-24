import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLazyVerifyCodeQuery } from "../../../services/fqsApi";
import { useForm } from "react-hook-form";
import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";

function AssessmentPage() {
  const navigate = useNavigate();
  const [verifyCode] = useLazyVerifyCodeQuery();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    //check first if code is valid in backend
    const verifyCodeResult = await verifyCode(data.code);

    // let isCodeValid = true;
    // let type = "quiz";
    // let validCode = "VLDC0D3";

    console.log(verifyCodeResult);

    if (verifyCodeResult.isSuccess) {
      const { isCodeValid, formType, validCode } = verifyCodeResult.data;

      if (isCodeValid) {
        navigate(`${formType}/${validCode}`);
      }
    }

    if (verifyCodeResult.isError) {
      alert("invalid code");
    }
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };
  return (
    <PageContainer>
      <PageHeader>Assessment</PageHeader>
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Text fontWeight="bold">Enter Code</Text>
        <Input
          type="text"
          border="1px solid"
          borderColor="blackAlpha.400"
          w="20rem"
          {...register("code", { required: true })}
          onKeyDown={onKeyEnter}
        />
        <Button onClick={handleSubmit(onSubmit)} mt="1rem" colorScheme="green">
          Submit
        </Button>
      </Flex>
    </PageContainer>
  );
}

export default AssessmentPage;
