import axios from "axios";
const BASE_URL = "https://4b225c4208553c0b624205fa1ab1f293.serveo.net/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
