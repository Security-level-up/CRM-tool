import axios from "axios";
import { Auth } from "aws-amplify";
class OpportunityService {
	constructor() {
		this.opportunityId = null;
		this.api = axios.create({
			baseURL:
				"https://qjf50l3iz6.execute-api.eu-west-1.amazonaws.com/Production",
			withCredentials: false,
		});

		this.api.interceptors.request.use(
			async (config) => {
				try {
					const session = await Auth.currentSession();
					const idToken = session.getIdToken().getJwtToken();

					if (idToken) {
						config.headers.Authorization = `Bearer ${idToken}`;
					}
				} catch (error) {
					console.error("Error fetching the token", error);
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	setOpportunityId(id) {
		this.opportunityId = id;
	}

	getOpportunityId() {
		return this.opportunityId;
	}

	async fetchSalesOpportunities() {
		try {
			const response = await this.api.get("api/SalesOpportunities");
			return response.data;
		} catch (error) {
			console.error("Error fetching sales opportunities:", error);
			throw error;
		}
	}

	//   // Fetch opportunities
	//   async fetchOpportunities() {
	//     try {
	//       const response = await this.api.get('/opportunities');
	//       return response.data;
	//     } catch (error) {
	//       console.error('Error fetching opportunities:', error);
	//       throw error;
	//     }
	//   }

	//   // Fetch a single opportunity by ID
	//   async fetchOpportunityById(id) {
	//     try {
	//       const response = await this.api.get(`/opportunities/${id}`);
	//       return response.data;
	//     } catch (error) {
	//       console.error(`Error fetching opportunity with ID ${id}:`, error);
	//       throw error;
	//     }
	//   }

	//   // Create a new opportunity
	//   async createOpportunity(opportunityData) {
	//     try {
	//       const response = await this.api.post('/opportunities', opportunityData);
	//       return response.data;
	//     } catch (error) {
	//       console.error('Error creating opportunity:', error);
	//       throw error;
	//     }
	//   }

	//   // Update an existing opportunity
	//   async updateOpportunity(id, opportunityData) {
	//     try {
	//       const response = await this.api.put(`/opportunities/${id}`, opportunityData);
	//       return response.data;
	//     } catch (error) {
	//       console.error(`Error updating opportunity with ID ${id}:`, error);
	//       throw error;
	//     }
	//   }

	//   // Delete an opportunity
	//   async deleteOpportunity(id) {
	//     try {
	//       const response = await this.api.delete(`/opportunities/${id}`);
	//       return response.data;
	//     } catch (error) {
	//       console.error(`Error deleting opportunity with ID ${id}:`, error);
	//       throw error;
	//     }
	//   }
}

const opportunityService = new OpportunityService();
export default opportunityService;
