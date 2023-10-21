import { API_URL } from "@function/wsCode";
import axios from "axios";

export const RequestApiPrivate = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
