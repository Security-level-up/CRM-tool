import axios from "axios";

class OpportunityService {
  constructor() {
    this.opportunityId = null;
    this.api = axios.create({
      baseURL: "https://api.example.com", // Replace with API base URL
    });
  }

  // Set the opportunity ID
  setOpportunityId(id) {
    this.opportunityId = id;
  }

  // Get the opportunity ID
  getOpportunityId() {
    return this.opportunityId;
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

// Export a singleton instance of the OpportunityService
const opportunityService = new OpportunityService();
export default opportunityService;
