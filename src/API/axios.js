import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://amazon-backend-qj46.onrender.com",
  // baseURL: "http://localhost:5000",
});

export { axiosInstace };
