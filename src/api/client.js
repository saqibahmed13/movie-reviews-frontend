import axios from "axios";

const client = axios.create({
  baseURL: "https://movie-reviews-59e8.onrender.com/api",
});

export default client;
