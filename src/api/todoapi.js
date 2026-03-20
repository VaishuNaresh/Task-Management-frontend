import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:8091/api/",
});
export const fetchTodos = () => API.get("/todos");
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const addTodo = (todo) => API.post("/todos", todo);
export const updateTodo = (id, data) =>
    API.patch(`/todos/${id}`, data);