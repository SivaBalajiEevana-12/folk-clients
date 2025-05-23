import React, { useEffect, useState } from 'react';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { Box, Button, Input, Card, Heading, Image, Stack, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getTripsDataBasedOnLocationAndUsers } from '../../Redux/app/action';
import theme from "../../theme";

const AdminTripsEvents = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  
  const store = useSelector((store) => store.AppReducer.adminTripsControlDataBasedOnLocation);

  // Corrected useEffect: Ensures dispatch is only called once when the component mounts
  useEffect(() => {
    dispatch(getTripsDataBasedOnLocationAndUsers())
      .then(res => {
        console.log(res);
      });
  }, [dispatch]); // Corrected dependency array

  useEffect(() => {
    if (store.data) {
      const filtered = store.data.flatMap(item => item.events).filter(event => {
        const location = event.location || ''; // Ensure location is not undefined
        const fromDate = event.fromDate || ''; // Ensure fromDate is not undefined

        const matchesLocation = location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchesDate = fromDate.includes(dateFilter);

        return matchesLocation && matchesDate;
      });

      setFilteredData(filtered);
    }
  }, [locationFilter, dateFilter, store]);

  const handleViewUsers = (event) => {
    setSelectedEvent(event);
    onOpen();
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  console.log("filtered", filteredData);
  console.log("filteredData", filteredData);

  return (
    <>
      <AdminTopNavbar />
      <Box overflow={"scroll"} height={"92vh"}>
        <Box mt={"10px"} width={"90%"} margin={"auto"}>
          <Box
            p={"10px"}
            fontSize={"20px"}
            fontFamily={"body"}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Input
              bgColor={"gray"} color={"white"}
              sx={{ "::placeholder": { color: "white" } }}
              type="text"
              value={locationFilter}
              onChange={handleLocationFilterChange}
              ml={"20px"}
              placeholder="Filter by Location"
            />
            <Input
              bgColor={"gray"} color={"white"}
              sx={{ "::placeholder": { color: "white" } }}
              type="date"
              value={dateFilter}
              onChange={handleDateFilterChange}
              ml={"20px"}
              placeholder="Filter by Date"
            />
          </Box>
        </Box>

        <Box p={6} display="flex" flexWrap="wrap" gap={4} justifyContent="center" width={"100%"}>
          {filteredData.map((item, index) => (
            <Card
              key={index}
              width={{ base: '100%', sm: '48%', md: '23%', lg: '20%' }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={2}
            >
              <Image
                objectFit="cover"
                width="100%"
                height="150px"
                src="https://cdn.pixabay.com/photo/2022/06/27/08/37/monk-7287041_1280.jpg"
                alt="Event Image"
              />

              <Stack spacing={3} p={3}>
                <Heading color="orange" fontSize="lg" fontWeight="bold">
                  {item.tripName}
                </Heading>
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>From</strong>: {item.from}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>To</strong>: {item.to}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>From Date</strong>: {item.fromDate}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>To Date</strong>: {item.toDate}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Description</strong>: {item.description}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Price</strong>: {item.price} Rupees
                  </Text>
                </VStack>
                <Button size="sm" bgColor="orange" color="white" mt={2} _hover={{ bg: 'orange.600' }} onClick={() => handleViewUsers(item)}>
                  View Users
                </Button>
              </Stack>

            </Card> 
          ))}
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Attendees Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" width="100%">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>WhatsApp</Th>
                  <Th>Age</Th>
                  <Th>Collage/Company</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedEvent?.attendeesDetails.map((attendee, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td fontWeight="bold">{attendee.name}</Td>
                    <Td>{attendee.email}</Td>
                    <Td>{attendee.watsAppNumber}</Td>
                    <Td>{attendee.age}</Td>
                    <Td>{attendee.collageOrCompany}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminTripsEvents;
