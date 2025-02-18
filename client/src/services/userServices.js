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
