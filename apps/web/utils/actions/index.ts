"use server";

import { client } from "@/api/global.client";
import { getSession } from "@/lib/sessions";

export const getProfile = async () => {
  const sessions = await getSession();
  client.defaults.headers.common = {
    Authorization: `bearer ${sessions?.accessToken}`,
  };
  const response = await client.get("auth/protected");
  return response;
};
