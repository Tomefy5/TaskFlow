import api from "./api";
import { toast } from "react-toastify";
import { apiUrls } from "./url";

export const register = async (userInfo) => {
  try {
    const response = await api.post(apiUrls.REGISTER_URL, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
    toast.error("Registration failed: ", error.message);
  }
};

export const login = async (loginInfo) => {
  try {
    const response = await api.post(apiUrls.LOGIN_URL, loginInfo, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "Connexion failed";
    toast.error("Invalid email or password");
    throw new Error(message);
  }
};

export const logout = async () => {
  try {
    await api.post(apiUrls.LOGOUT_URL);
  } catch (error) {
    const message = error.response?.data?.error || "Logout failed";
    throw new Error(message);
  }
};
