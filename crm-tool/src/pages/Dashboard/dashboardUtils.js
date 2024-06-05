export const calculateStatistics = (opportunities) => {
	if (!Array.isArray(opportunities)) {
		return {
			totalRevenue: 0,
			winLossRatio: 0,
			activeOpportunities: 0,
			averageDealSize: 0,
		};
	}
	const totalRevenue = opportunities.reduce(
		(acc, opportunity) =>
			acc + opportunity.amount * opportunity.probOfCompletion,
		0
	);

	const wonOpportunities = opportunities.filter(
		(opportunity) => opportunity.pipelineStage.stageName === "Won"
	);

	const lostOpportunities = opportunities.filter(
		(opportunity) => opportunity.pipelineStage.stageName === "Lost"
	);

	const winLossRatio =
		wonOpportunities.length /
		(wonOpportunities.length + lostOpportunities.length);

	const activeOpportunities = opportunities.filter(
		(opportunity) =>
			opportunity.pipelineStage.stageName !== "Won" &&
			opportunity.pipelineStage.stageName !== "Lost"
	).length;

	const averageDealSize =
		totalRevenue / (wonOpportunities.length + lostOpportunities.length);

	return { totalRevenue, winLossRatio, activeOpportunities, averageDealSize };
};

export const calculateMonthlyRevenue = (opportunities) => {
	if (!Array.isArray(opportunities)) {
		return [];
	}
	const monthlyRevenue = Array(12).fill(0);

	opportunities.forEach((opportunity) => {
		if (
			opportunity.pipelineStage.stageName === "Won" &&
			opportunity.dateClosed
		) {
			const monthIndex = new Date(opportunity.dateClosed).getMonth();
			monthlyRevenue[monthIndex] += opportunity.amount;
		}
	});

	return monthlyRevenue;
};
