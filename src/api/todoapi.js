import axios from "axios";
const API = axios.create({
     baseURL: "https://task-management-pro-dre1.onrender.com/api/",
    // baseURL: "http://localhost:8090/api"
});
export const fetchTodo = () => API.get("/todos");
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const addTodo = (todo) => API.post("/todos", todo);
export const completedTodo = (todo) => API.post("/todos/completed")
export const updateTodo = (id, data) =>
    API.patch(`/todos/${id}`, data);