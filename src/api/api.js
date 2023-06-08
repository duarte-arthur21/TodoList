import axios from "axios";

//Esse arquivo configura a instância do Axios com a URL base do seu servidor JSON.

const api = axios.create({
  baseURL: "http://localhost:5173", // Altere se necessário a URL do seu servidor JSON
});

export default api;
