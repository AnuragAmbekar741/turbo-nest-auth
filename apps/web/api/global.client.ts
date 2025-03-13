import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;

export const client = axios.create({
  baseURL: BASE_URL,
});
