import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Button,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const data = [
  { id: 1, name: "tshirt", price: "400" },
  { id: 2, name: "polo", price: "600" },
  { id: 3, name: "pants", price: "1200" },
  { id: 4, name: "tshirt", price: "400" },
  { id: 5, name: "polo", price: "600" },
  { id: 6, name: "pants", price: "1200" },
  { id: 7, name: "tshirt", price: "400" },
  { id: 8, name: "polo", price: "600" },
  { id: 9, name: "pants", price: "1200" },
  { id: 10, name: "tshirt", price: "400" },
  { id: 11, name: "polo", price: "600" },
  { id: 12, name: "pants", price: "1200" },
  { id: 13, name: "tshirt", price: "400" },
  { id: 14, name: "polo", price: "600" },
  { id: 15, name: "pants", price: "1200" },
  { id: 16, name: "tshirt", price: "400" },
  { id: 17, name: "polo", price: "600" },
  { id: 18, name: "pants", price: "1200" },
];

const itemsPerPage = 5; // Number of items per page

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to perform search
  const handleSearch = () => {
    const newData = data.filter(
      (item) =>
        item.id.toString().includes(searchTerm) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(newData);
    setCurrentPage(1); // Reset pagination when searching
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const [inputPage, setInputPage] = useState(currentPage);

  const handlePageChange = () => {
    let page = parseInt(inputPage);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
      setInputPage(totalPages);
    } else {
      setCurrentPage(1);
      setInputPage(1);
    }
  };

  return (
    <Box>
      <HStack mb={4}>
        <Input
          type="text"
          placeholder="Search by ID or Name"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button onClick={handleSearch}>Search</Button>
      </HStack>
      <Table variant="simple">
        <TableCaption>Items</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {filteredData.length > 0 && (
        <HStack mt={4}>
          <Button
            onClick={() => paginate(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            Prev
          </Button>

          <Input
            type="number"
            min="1"
            max={totalPages}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handlePageChange(event);
              }
            }}
            w="3rem"
          />
          <Text>of {totalPages}</Text>
          <Button
            onClick={() => paginate(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </HStack>
      )}
    </Box>
  );
};

export default PaginatedTable;
