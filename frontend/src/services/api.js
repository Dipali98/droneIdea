const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

// Reusable API request function
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

// API methods
const api = {
  get: async (endpoint) => {
    return await apiRequest(endpoint, {
      method: "GET",
    });
  },

  post: async (endpoint, body) => {
    return await apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
};

export default api;
