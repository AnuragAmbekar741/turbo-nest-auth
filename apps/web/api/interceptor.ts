import { getSession } from "@/lib/sessions";
import { client } from "./global.client";

client.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
