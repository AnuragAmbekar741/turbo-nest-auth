import { AxiosResponse } from "axios";
import { client } from "./global.client";

//GET request
export const getData = async <T>(
  endpoint: string,
  options?: { signal?: AbortSignal }
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await client.get(endpoint, options);
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST request
export const postData = async <T, U>(endpoint: string, data: U): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await client.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

// PATCH request
export const patchData = async <T, U>(
  endpoint: string,
  data: U
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await client.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("PATCH request error:", error);
    throw error;
  }
};

//PUT request
export const putData = async <T, U>(
  endpoint: string,
  data: U,
  sendToken = true
): Promise<T> => {
  try {
    const config = sendToken
      ? {} // Send the default Authorization header with the token
      : { headers: { Authorization: undefined } }; // Remove Authorization header

    const response: AxiosResponse<T> = await client.put(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

export const deleteData = async <T, U>(
  endpoint: string,
  data: U,
  options?: { signal?: AbortSignal }
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await client.delete(endpoint, {
      data,
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};
