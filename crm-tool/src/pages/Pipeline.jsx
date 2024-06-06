import "./Pipeline.css";
import SideNav from "../components/SideNav";
import KanbanBoard from "../components/KanbanBoard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, useColorMode, Button, Skeleton } from "@chakra-ui/react";
import opportunityService from "../services/opportunityService";
import add_circle from "../assets/add_circle.svg";
import { fetchAuthSession } from "aws-amplify/auth";

const Pipeline = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [userRole, setUserRole] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canCreate, setCanCreate] = useState(true);

  useEffect(() => {
    const postLogin = async () => {
      try {
        await opportunityService.postLoginInfo();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    postLogin();
  }, []); // Empty dependency array ensures this runs once on component mount

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();

        if (!idToken) {
          throw new Error("ID token not found.");
        }

        const tokenParts = idToken.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        const fetchedUserRole = payload["cognito:groups"][0];
        setUserRole(fetchedUserRole);
        console.log("fetching:", payload["cognito:groups"][0]);
        if (userRole == "SalesRep" || userRole == "Manager") {
          setCanCreate(true);
        } else {
          setCanCreate(false);
        }
      } catch (error) {
        console.error("Error retrieving user role:", error);
      }
    };

    fetchUserRole();
  }, [userRole]);

  useEffect(() => {
    const fetchSalesOpportunities = async () => {
      try {
        const opportunities =
          await opportunityService.fetchSalesOpportunities();
        setOpportunities(opportunities);
      } catch (error) {
        console.error("Error fetching sales opportunities:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSalesOpportunitiesCurrentUser = async () => {
      try {
        const opportunities = await opportunityService.fetchOpportunityById();
        setOpportunities(opportunities);
      } catch (error) {
        console.error(
          "Error fetching current user's sales opportunities:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    if (userRole) {
      if (userRole === "Manager" || userRole === "GeneralUser") {
        console.log("user is manager or general user");
        fetchSalesOpportunities();
      } else if (userRole === "SalesRep") {
        fetchSalesOpportunitiesCurrentUser();
      }
    }
  }, [userRole]);

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
            isDisabled={!canCreate}
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
