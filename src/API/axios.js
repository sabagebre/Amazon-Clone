import axios from "axios";

const axiosInstace = axios.create({
//   baseURL: "http://127.0.0.1:5001/clone-d1dc6/us-central1/api",
  baseURL: "http://localhost:5000",
});

export {axiosInstace}