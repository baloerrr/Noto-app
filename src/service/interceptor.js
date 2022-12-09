import axios from "axios";

export const API = axios.create({
  baseURL: "https://notes-api.dicoding.dev/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
