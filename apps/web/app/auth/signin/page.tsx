import React from "react";
import { SigninForm } from "../../../components/auth/forms/SigninForm";
import { PageLayout } from "@/components/auth/layouts/PageLayout";

const SigninPage = () => {
  return (
    <PageLayout
      title="Sign in"
      linkText="Create have an account? Signin"
      linkHref="signup"
    >
      <SigninForm />
    </PageLayout>
  );
};

export default SigninPage;
