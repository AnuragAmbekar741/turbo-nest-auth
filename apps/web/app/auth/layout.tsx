import { MainLayout } from "@/components/auth/layouts/MainLayout";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AuthLayout;
