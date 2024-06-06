import axios from "axios";
import { fetchAuthSession } from "aws-amplify/auth";

class OpportunityService {
  constructor() {
    this.opportunityId = null;

    this.api = axios.create({
      baseURL: "https://localhost:7173/api",
      withCredentials: false,
    });

    this.api.interceptors.request.use(
      async (config) => {
        const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
        config.headers.Authorization = `Bearer ${idToken}`;
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

  async postLoginInfo() {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.get("/Login", {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching sales opportunities:", error);
      throw error;
    }
  }

  // Fetch opportunities
  async fetchSalesOpportunities() {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();

    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.get("/SalesOpportunities", {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching sales opportunities:", error);
      throw error;
    }
  }

  // Fetch a single opportunity by ID
  async fetchOpportunityById() {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.get(`/SalesOpportunities/byCurrentUser`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching opportunity for current user:`, error);
      throw error;
    }
  }

  // Create a new opportunity
  async createOpportunity(opportunityData) {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.post(
        "/SalesOpportunities/personalSalesOpportunity",
        opportunityData,
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating opportunity:", error);
      throw error;
    }
  }

  // Update an existing opportunity
  async updateOpportunity(id, opportunityData) {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.patch(
        `/SalesOpportunities/${id}`,
        opportunityData,
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating opportunity with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete an opportunity
  async deleteOpportunity(id) {
    const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    try {
      const headers = {
        Authorization: `Bearer ${idToken}`,
      };
      const response = await this.api.delete(`/SalesOpportunities/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting opportunity with ID ${id}:`, error);
      throw error;
    }
  }
}

const opportunityService = new OpportunityService();
export default opportunityService;
