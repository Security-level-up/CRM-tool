/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthSession } from "aws-amplify/auth";
import "./KanbanCard.css";

const KanbanCard = ({ cardDetails, index }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();

        if (!idToken) {
          throw new Error("ID token not found.");
        }

        const tokenParts = idToken.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        const fetchedUserRole = payload["cognito:groups"][1];
        setUserRole(fetchedUserRole);
      } catch (error) {
        console.error("Error retrieving user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  const openPopUp = (cardDetails) => {
    if (userRole === "SalesRep" || userRole === "Manager") {
      navigate(`/viewOpp`, { state: { cardDetails } });
    }
  };

  const getBoxShadow = (stage) => {
    switch (stage) {
      case 1:
        return "custom-orange";
      case 2:
        return "custom-maroon";
      case 3:
        return "custom-red";
      case 4:
        return "custom-purple";
      case 5:
        return "custom-navy";
      default:
        return "";
    }
  };

  return (
    <Draggable
      draggableId={cardDetails.opportunityID.toString()}
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
          boxShadow={getBoxShadow(cardDetails.stage)}
          onClick={() => openPopUp(cardDetails)}
        >
          <Box>
            <h4 className="title">{cardDetails.title}</h4>
          </Box>
          <Box>
            <p className="text">{cardDetails.amount}</p>
          </Box>
        </Flex>
      )}
    </Draggable>
  );
};

export default KanbanCard;
