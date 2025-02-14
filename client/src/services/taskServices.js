import api from "./api";

export const createTask = async (task) => {
    try {
        const response = await api.post("/tasks", task);
        if(!response.data) throw new Error("fetchTasks: error on creating new tasks");
        console.log(response.data); //! A supprimer
    } catch (error) {
        console.log(error.message);
    }
}