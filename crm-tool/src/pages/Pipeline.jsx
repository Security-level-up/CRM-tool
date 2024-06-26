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
	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();

				if (!idToken) {
					throw new Error("ID token not found.");
				}

				const tokenParts = idToken.split(".");
				const payload = JSON.parse(atob(tokenParts[1]));
				console.log(payload["cognito:groups"]);

				if (payload["cognito:groups"].includes("Manager")) {
					setUserRole("Manager");
				} else if (payload["cognito:groups"].includes("SalesRep")) {
					setUserRole("SalesRep");
				} else {
					setUserRole("GeneralUser");
				}
			} catch (error) {
				console.error("Error retrieving user role:", error);
			}
		};

		fetchUserRole();
	}, []);

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
