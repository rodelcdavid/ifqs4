import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import OverallPerformance from "./OverallPerformance";
import LinePerformance from "./LinePerformance";
import LineSelect from "./LineSelect";
import UserPerformance from "./UserPerformance";
import UserSelect from "./UserSelect";
import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";
import PageContent from "../../../components/common/PageContent";

function ReportsPage() {
  const [reportType, setReportType] = useState("overall");

  const onTypeChange = (e) => {
    setReportType(e.target.value);
  };
  return (
    <PageContainer>
      <PageHeader>Reports</PageHeader>

      <PageContent>
        <Flex flexDir="column" gap="0.5rem">
          <Flex>
            <FormLabel fontSize="sm" w="10rem">
              Report Type:
            </FormLabel>
            <Select w="20rem" onChange={onTypeChange} size="sm">
              <option value="overall">Overall Performance</option>
              <option value="line">Line Performance</option>
              <option value="user">User Performance</option>
              <option value="question">Question Analysis</option>
            </Select>
            <Button size="sm" ml="0.5rem" colorScheme="green">
              Generate
            </Button>
          </Flex>
          <Flex>
            <FormLabel w="10rem" fontSize="sm">
              Form Code:
            </FormLabel>
            <Input type="text" size="sm" w="10rem" />
            {/* <Button size="sm" ml="0.5rem" colorScheme="green">
              Generate
            </Button> */}
          </Flex>
          <Flex>
            <FormLabel w="10rem" fontSize="sm">
              Form Name:
            </FormLabel>
            <Text>PK E-Learning Quiz</Text>
          </Flex>

          <>
            {reportType === "overall" && <OverallPerformance />}
            {reportType === "line" && <LinePerformance />}
            {reportType === "user" && <UserPerformance />}
          </>
        </Flex>
      </PageContent>
    </PageContainer>
  );
}

export default ReportsPage;
