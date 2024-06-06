/* eslint-disable react/prop-types */
import { Box, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import KanbanCard from "../components/KanbanCard";
import opportunityService from "../services/opportunityService";
import "./KanbanBoard.css";

const KanbanBoard = ({ data }) => {
  const [opportunities, setOpportunities] = useState(data);
  const navigate = useNavigate();

  function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
  }

  const onDragEnd = async (result) => {
    console.log(data);
    try {
      if (result.destination.droppableId === 5) {
        const request = {
          stage: result.destination.droppableId,
          closedDate: getCurrentDateTime(),
        };
        await opportunityService.updateOpportunity(result.draggableId, request);
      } else {
        const request = {
          stage: result.destination.droppableId,
        };
        await opportunityService.updateOpportunity(result.draggableId, request);
      }
      const draggedCard = opportunities.find(
        (cardDetails) => cardDetails.opportunityID == result.draggableId
      );
      let temp = opportunities.filter((card) => card !== draggedCard);
      draggedCard.stage = result.destination.droppableId;
      temp.push(draggedCard);
      setOpportunities(temp);
      navigate(`/`);
    } catch (error) {
      console.error("Post Failed:", error.message);
    }
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
                    className="scroll"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.stage === 1)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.opportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}

                    {data.filter((cardDetails) => cardDetails.stage === 1)
                      .length === 0 && <Box className="placeholder"></Box>}
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
                PROPOSAL
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="2">
                {(provided) => (
                  <Flex
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                    gap="2vh"
                    flexDir="column"
                    justify="center"
                    align="center"
                    className="scroll"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.stage === 2)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.opportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.stage === 2)
                      .length === 0 && <Box className="placeholder"></Box>}
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
              bg="brand.red"
              align="center"
              justify="center"
              boxShadow="custom-red"
              borderRadius="1vh"
            >
              <Heading size="md" color="white">
                NEGOTIATION
              </Heading>
            </Flex>
            <Flex p="1vh" height="70vh" flexDir="column" gap="2vh">
              <Droppable droppableId="3">
                {(provided) => (
                  <Flex
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                    gap="2vh"
                    flexDir="column"
                    justify="center"
                    align="center"
                    className="scroll"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.stage === 3)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.opportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.stage === 3)
                      .length === 0 && <Box className="placeholder"></Box>}
                  </Flex>
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
                  <Flex
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                    gap="2vh"
                    flexDir="column"
                    justify="center"
                    align="center"
                    className="scroll"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.stage === 4)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.opportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.stage === 4)
                      .length === 0 && <Box className="placeholder"></Box>}
                  </Flex>
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
                  <Flex
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    w="100%"
                    gap="2vh"
                    flexDir="column"
                    justify="center"
                    align="center"
                    className="scroll"
                  >
                    {data
                      .filter((cardDetails) => cardDetails.stage === 5)
                      .map((cardDetails, index) => (
                        <KanbanCard
                          key={cardDetails.opportunityID}
                          cardDetails={cardDetails}
                          index={index}
                        />
                      ))}
                    {provided.placeholder}
                    {data.filter((cardDetails) => cardDetails.stage === 5)
                      .length === 0 && <Box className="placeholder"></Box>}
                  </Flex>
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
