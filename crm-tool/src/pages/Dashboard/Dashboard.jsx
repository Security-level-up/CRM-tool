import { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Grid,
	GridItem,
	useColorMode,
	Skeleton,
} from "@chakra-ui/react";
import SideNav from "../../components/SideNav";
import { calculateStatistics, calculateMonthlyRevenue } from "./dashboardUtils";
import "./DashboardStyles.css";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import opportunityService from "../../services/opportunityService";
Chart.register(...registerables);

const Dashboard = () => {
	const { colorMode } = useColorMode();
	const [loading, setLoading] = useState(true);
	const [opportunities, setOpportunities] = useState([]);

	const user = {
		name: "John Doe",
		role: "Administrator",
	};

	useEffect(() => {
		async function fetchSalesOpportunities() {
			try {
				const opportunities =
					await opportunityService.fetchSalesOpportunities();
				setOpportunities(opportunities);
			} catch (error) {
				console.error("Error fetching sales opportunities:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchSalesOpportunities();
	}, []);

	const statistics = calculateStatistics(opportunities);
	const monthlyRevenue = calculateMonthlyRevenue(opportunities);

	const pipelineStageData = {
		labels: ["Prospecting", "Proposal", "Negotiation", "Won", "Lost"],
		datasets: [
			{
				label: "Pipeline Distribution",
				data: [
					opportunities.filter(
						(opportunity) =>
							opportunity.pipelineStage.stageName === "Prospecting"
					).length,
					opportunities.filter(
						(opportunity) => opportunity.pipelineStage.stageName === "Proposal"
					).length,
					opportunities.filter(
						(opportunity) =>
							opportunity.pipelineStage.stageName === "Negotiation"
					).length,
					opportunities.filter(
						(opportunity) => opportunity.pipelineStage.stageName === "Won"
					).length,
					opportunities.filter(
						(opportunity) => opportunity.pipelineStage.stageName === "Lost"
					).length,
				],
				backgroundColor: "white",
			},
		],
	};

	const monthlyRevenueData = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		datasets: [
			{
				label: "Monthly Revenue",
				data: monthlyRevenue,
				backgroundColor: "white",
				borderColor: "black",
				borderWidth: 2,
				fill: false,
			},
		],
	};

	return (
		<Flex className="dashboard-container">
			<SideNav />
			<Flex className="dashboard-content">
				<Flex
					className="header"
					bg={colorMode === "light" ? "#f39677" : "#41436a"}
					color={colorMode === "light" ? "white" : "black"}
				>
					<Box>
						<h2 size="md">Welcome, {user.name}!</h2>
						<h4 size="sm">{user.role}</h4>
					</Box>
				</Flex>
				<Flex p={4} justify="space-between">
					<Box className="metric-box" mr={2}>
						<h2 size="sm">Predicted Revenue</h2>
						<h4 size="lg">
							{loading ? (
								<Skeleton width="100px" height="20px" />
							) : (
								`R${statistics?.totalRevenue}`
							)}
						</h4>
					</Box>
					<Box className="metric-box" mr={2}>
						<h2 size="sm">Win/Loss Ratio</h2>
						<h4 size="lg">
							{loading ? (
								<Skeleton width="100px" height="20px" />
							) : (
								statistics?.winLossRatio
							)}
						</h4>
					</Box>
					<Box className="metric-box">
						<h2 size="sm">Active Opportunities</h2>
						<h4 size="lg">
							{loading ? (
								<Skeleton width="100px" height="20px" />
							) : (
								statistics?.activeOpportunities
							)}
						</h4>
					</Box>
					<Box className="metric-box">
						<h2 size="sm">Average Deal Size</h2>
						<h4 size="lg">
							{loading ? (
								<Skeleton width="100px" height="20px" />
							) : (
								`R${statistics?.averageDealSize}`
							)}
						</h4>
					</Box>
				</Flex>

				<Grid className="key-stat-grid">
					<GridItem className="key-stat-item">
						<h2 size="md">Pipeline Distribution</h2>
						{loading ? (
							<Skeleton height="200px" />
						) : (
							<Bar data={pipelineStageData} />
						)}
					</GridItem>
					<GridItem className="key-stat-item">
						<h2 size="md">Monthly Revenue Trend</h2>
						{loading ? (
							<Skeleton height="200px" />
						) : (
							<Line data={monthlyRevenueData} />
						)}
					</GridItem>
				</Grid>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
