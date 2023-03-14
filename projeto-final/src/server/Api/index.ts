import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-books.onrender.com",
  timeout: 6000,
});

