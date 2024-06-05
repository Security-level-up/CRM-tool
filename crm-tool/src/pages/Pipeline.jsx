import "./Pipeline.css";
import SideNav from "../components/SideNav";
import KanbanBoard from "../components/KanbanBoard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, useColorMode, Button, Skeleton } from "@chakra-ui/react";
import opportunityService from "../services/opportunityService";
import add_circle from "../assets/add_circle.svg";

const Pipeline = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    async function fetchSalesOpportunities() {
      try {
        const opportunities =
          await opportunityService.fetchSalesOpportunities();
        console.log(opportunities);
        setOpportunities(opportunities);
      } catch (error) {
        console.error("Error fetching sales opportunities:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSalesOpportunities();
  }, []);

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
        {loading ? (
          <Skeleton width="100px" height="20px" />
        ) : (
          <KanbanBoard data={opportunities} />
        )}
      </Flex>
    </Flex>
  );
};

export default Pipeline;
