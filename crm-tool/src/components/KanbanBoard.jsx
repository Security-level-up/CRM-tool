/* eslint-disable react/prop-types */
import { Box, Heading, Flex } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanCard from "../components/KanbanCard";
import "./KanbanBoard.css";

const KanbanBoard = ({ data }) => {
  const onDragEnd = async (result) => {
    console.log(result);
  };
  return (
    <Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex justify="center" p="2vh" flexDir="row">
          <Flex gap="2vh" width="15vw" p={4} flexDir="column">
            <Flex
              p="4"
              height="10vh"
              bg="brand.orange"
              align="center"
              justify="center"
              boxShadow="custom-orange"
              borderRadius="1vh"
            >
              <Heading color="white" size="md">
                NEW
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="1">
                {(provided) => (
                  <Flex
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                    gap="2vh"
                    flexDir="column"
                    justify="center"
                    align="center"
                    padding="1vh"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.Stage === 1)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.OpportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}

                    {data.filter((cardDetails) => cardDetails.Stage === 1)
                      .length === 0 && (
                      <Box className="placeholder">No items to display</Box>
                    )}
                    {provided.placeholder}
                  </Flex>
                )}
              </Droppable>
            </Flex>
          </Flex>
          {/* Repeat for other stages */}
          <Flex width="15vw" flexDir="column" gap="2vh" p={4}>
            <Flex
              p="4"
              height="10vh"
              bg="brand.maroon"
              align="center"
              justify="center"
              boxShadow="custom-maroon"
              borderRadius="1vh"
            >
              <Heading size="md" color="white">
                NEGOTIATION
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="2">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.Stage === 2)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.OpportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.Stage === 2)
                      .length === 0 && (
                      <Box className="placeholder">No items to display</Box>
                    )}
                  </Box>
                )}
              </Droppable>
            </Flex>
          </Flex>
          {/* Repeat for other stages */}
          <Flex width="15vw" flexDir="column" gap="2vh" p={4}>
            <Flex
              p="4"
              height="10vh"
              bg="brand.red"
              align="center"
              justify="center"
              boxShadow="custom-red"
              borderRadius="1vh"
            >
              <Heading size="md" color="white">
                PROPOSAL
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="3">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.Stage === 3)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.OpportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.Stage === 3)
                      .length === 0 && (
                      <Box className="placeholder">No items to display</Box>
                    )}
                  </Box>
                )}
              </Droppable>
            </Flex>
          </Flex>
          <Flex width="15vw" flexDir="column" gap="2vh" p={4}>
            <Flex
              p="4"
              height="10vh"
              bg="brand.purple"
              align="center"
              justify="center"
              boxShadow="custom-purple"
              borderRadius="1vh"
            >
              <Heading size="md" color="white">
                WON
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="4">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.Stage === 4)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.OpportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.Stage === 4)
                      .length === 0 && (
                      <Box className="placeholder">No items to display</Box>
                    )}
                  </Box>
                )}
              </Droppable>
            </Flex>
          </Flex>
          <Flex flexDir="column" gap="2vh" p={4} width="15vw">
            <Flex
              p="4"
              height="10vh"
              bg="brand.blue"
              align="center"
              justify="center"
              boxShadow="custom-blue"
              borderRadius="1vh"
            >
              <Heading size="md" color="white">
                LOST
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="5">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.Stage === 5)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.OpportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.Stage === 5)
                      .length === 0 && (
                      <Box className="placeholder">No items to display</Box>
                    )}
                  </Box>
                )}
              </Droppable>
            </Flex>
          </Flex>
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default KanbanBoard;