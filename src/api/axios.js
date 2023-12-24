import axios from "axios";
const BASE_URL = "https://34920110bf62aaa68d45b1ade6640219.serveo.net/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
