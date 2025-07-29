import axios from "axios";

const api = axios.create({
    baseURL: "https://alumni-student-management.onrender.com/api",
    withCredentials: true,  // Ensures cookies are sent with requests
});

export default api;
