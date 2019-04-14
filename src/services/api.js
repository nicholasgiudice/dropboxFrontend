import axios from "axios";

const api = axios.create({
  baseURL: "https://dropboxbackend.herokuapp.com"
});

export default api;
