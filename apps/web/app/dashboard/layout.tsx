import { Button } from "@/components/ui/button";
import React, { PropsWithChildren } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex p-6 justify-end items-center">
        <Button variant={"ghost"}>
          <SquareArrowOutUpRight size={24} />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
