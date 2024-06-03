/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
// import opportunityService from "../services/opportunityService";
import "./KanbanCard.css";

const KanbanCard = ({ cardDetails, index }) => {
  const navigate = useNavigate();

  const openPopUp = (cardDetails) => {
    console.log("clickedOnCard");
    // opportunityService.setOpportunityId(cardDetails.OpportunityID);
    navigate(`/viewOpp`, { state: { cardDetails } });
  };

  return (
    <Draggable
      draggableId={cardDetails.OpportunityID.toString()}
      index={index}
      gap="2vh"
    >
      {(provided) => (
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          bg="white"
          height="10vh"
          width="100%"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          padding="1vh"
          gap="1vh"
          boxShadow="custom-orange"
          onClick={() => openPopUp(cardDetails)}
          className={cardDetails.Stage}
        >
          <Box>
            <h4 className="title">{cardDetails.Title}</h4>
          </Box>
          <Box>
            <p className="text">{cardDetails.Amount}</p>
          </Box>
        </Flex>
      )}
    </Draggable>
  );
};

export default KanbanCard;
