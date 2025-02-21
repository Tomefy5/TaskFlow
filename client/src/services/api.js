import axios from "axios";

const api = await axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || "http://localhost:5000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default api;
