import React from "react";
import { SignupForm } from "../../../components/auth/forms/SignupForm";
import { PageLayout } from "@/components/auth/layouts/PageLayout";

const SignupPage = () => {
  return (
    <PageLayout
      title="Sign up"
      linkText=" Already have an account? Login"
      linkHref="signin"
    >
      <SignupForm />
    </PageLayout>
  );
};

export default SignupPage;
