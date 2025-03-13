import React from "react";
import { SigninForm } from "../../../components/auth/forms/SigninForm";
import { PageLayout } from "@/components/auth/layouts/PageLayout";

const SigninPage = () => {
  return (
    <PageLayout
      title="Sign in"
      linkText="Create an account? Sign up"
      linkHref="signup"
    >
      <SigninForm />
    </PageLayout>
  );
};

export default SigninPage;
