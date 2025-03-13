import React, { ReactNode } from "react";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="hidden md:w-1/2 h-full md:flex"></div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};
