import { useState } from "react";
import api from "../services/api";

function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login user
  const login = async (formData) => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (formData) => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/register", formData);

      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/logout", {});

      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    loading,
    error,
    setError,
  };
}

export default useAuth;
