import axios from "axios";

class OpportunityService {
	constructor() {
		this.opportunityId = null;
		this.api = axios.create({
			baseURL:
				"https://qjf50l3iz6.execute-api.eu-west-1.amazonaws.com/Production",
		});
		this.api.interceptors.request.use(
			(config) => {
				const token = localStorage.getItem(
					"CognitoIdentityServiceProvider.1dltou4a7b6tqnmk592sr2meu6.google_100017168842405658255.idToken"
				);
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
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
