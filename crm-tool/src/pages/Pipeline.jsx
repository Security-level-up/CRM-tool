import "./Pipeline.css";
import SideNav from "../components/SideNav";
import KanbanBoard from "../components/KanbanBoard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, useColorMode, Button } from "@chakra-ui/react";
import add_circle from "../assets/add_circle.svg";

const Pipeline = () => {
  const navigate = useNavigate();
  // const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    // Fetch opportunities when the component mounts
    const fetchOpportunities = async () => {
      // try {
      //   const data = await opportunityService.fetchOpportunities();
      //   setOpportunities(data);
      // } catch (error) {
      //   console.error('Error fetching opportunities:', error);
      // }
    };

    fetchOpportunities();
  }, []);
  const mockData = [
    {
      OpportunityID: 1,
      Title: "New Client 1",
      Amount: "$5000",
      DateCreated: "2024-01-01",
      DateClosed: "2024-01-15",
      ProbOfCompletion: "60%",
      Stage: 1,
      Notes: "Initial contact made. Awaiting response.",
      AssignedTo: "John Doe",
    },
    {
      OpportunityID: 2,
      Title: "New Client 2",
      Amount: "$5000",
      DateCreated: "2024-01-01",
      DateClosed: "2024-01-15",
      ProbOfCompletion: "60%",
      Stage: 2,
      Notes: "Initial contact made. Awaiting response.",
      AssignedTo: "Jane Doe",
    },
    {
      OpportunityID: 3,
      Title: "New Client 3",
      Amount: "$10500",
      DateCreated: "2024-01-01",
      DateClosed: "2024-01-15",
      ProbOfCompletion: "60%",
      Stage: 2,
      Notes: "Initial contact made. Awaiting response.",
      AssignedTo: "John Doe",
    },
  ];
  const [data] = useState(mockData);
  const { colorMode } = useColorMode();

  const handleNew = () => {
    navigate(`/NewOpp`);
  };

  return (
    <Flex
      bg={colorMode === "light" ? "brand.light_grey" : "brand.navy"}
      className="page-container"
    >
      <SideNav />
      <Flex className="main-container">
        <Flex
          width="100%"
          color="black"
          height="5vh"
          justify="flex-end"
          paddingRight="4vh"
        >
          <Button
            className="button"
            bg="brand.orange"
            color="brand.white"
            onClick={handleNew}
          >
            <img src={add_circle} alt="add opportunity icon" />
            Add New
          </Button>
        </Flex>
        <KanbanBoard data={data} />
      </Flex>
    </Flex>
  );
};

export default Pipeline;
