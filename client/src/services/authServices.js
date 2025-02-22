import api from "./api";

export const getAuth = async () => {
    try {
        const auth = await api.get("/check-auth");
        // console.log("Auth: ",auth)
        return auth.data.isAuthenticated; 
    } catch (error) {
        console.log(error.message);
    }
}