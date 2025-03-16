import { getSession } from "@/lib/sessions";
import React from "react";

const HomePage = async () => {
  const session = await getSession();
  return <div>{session?.user.name}</div>;
};

export default HomePage;
