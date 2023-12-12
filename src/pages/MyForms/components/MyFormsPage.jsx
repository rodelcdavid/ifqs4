import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  useLazyGetEmployeeItemsQuery,
  useLazyGetOptionsQuery,
} from "../../../services/fqsApi";
import { createPath } from "react-router-dom";

import * as XLSX from "xlsx";
import PaginatedTable from "./PaginatedTable";

function MyFormsPage() {
  const [getEmployeeItems, { data: employeeItems }] =
    useLazyGetEmployeeItemsQuery();

  const [getColorOptions, { data: colors }] = useLazyGetOptionsQuery();
  // const [getOptions]

  const handleProximity = async (e) => {
    if (e.key === "Enter") {
      await getEmployeeItems(e.target.value);
    }
  };

  useEffect(() => {
    if (employeeItems) {
      //if item has color
      const getOptions = async () => {
        await getColorOptions({ item: "Tshirt", property: "Color" });
      };
      getOptions();

      //if item has size
      //getsize()
    }
  }, [employeeItems, getColorOptions]);

  const handleExport = () => {
    const data = [
      { id: 1, name: "tshirt", price: "400" },
      { id: 2, name: "polo", price: "600" },
      { id: 3, name: "pants", price: "1200" },
    ];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Transmittal.xlsx");
  };

  return (
    <Box>
      <Heading as="h3" size="md">
        Task not yet available.
      </Heading>
      <PaginatedTable />
      <Button onClick={handleExport}>Export</Button>
      <Flex>
        <FormLabel>Proximity</FormLabel>
        <Input type="password" onKeyDown={handleProximity} />
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Item</Th>
              <Th>Color</Th>
            </Tr>
          </Thead>
          {employeeItems && (
            <Tbody>
              <Tr>
                <Td>{employeeItems?.name}</Td>
                <Td>{employeeItems?.Item}</Td>
                <Td>
                  <Select defaultValue={employeeItems?.Color}>
                    {colors?.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MyFormsPage;
