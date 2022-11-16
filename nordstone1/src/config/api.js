import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  //   baseURL: "http://localhost:8080",
});

export const calculation = (num1, num2, operator) =>
  API.post("/api/calc", {
    num1,
    operator,
    num2,
  });
