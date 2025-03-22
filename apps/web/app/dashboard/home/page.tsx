import { getProfile } from "@/utils/actions";
import React from "react";

const HomePage = async () => {
  const res = await getProfile();
  return (
    <div className="w-full">
      <p>{res.data}</p>
    </div>
  );
};

export default HomePage;
