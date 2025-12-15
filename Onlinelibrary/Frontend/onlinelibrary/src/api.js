// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://obscure-enigma-v6gxx764wjrr3pxg9-5000.app.github.dev",
  headers: { "Content-Type": "application/json" },
});

export default api;
