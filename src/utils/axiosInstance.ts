import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
