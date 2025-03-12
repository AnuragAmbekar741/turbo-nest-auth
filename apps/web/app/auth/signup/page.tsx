import Link from "next/link";
import React from "react";
import { SignupForm } from "./SignupForm";

const SignupPage = () => {
  return (
    <div className="p-8 rounded-lg w-96 flex flex-col justify-center items-center gap-8">
      <h3 className="text-2xl font-medium">Sign up</h3>
      <SignupForm />
      <Link className="text-sm font-normal text-gray-600" href="signin">
        Already have an account? Signin
      </Link>
    </div>
  );
};

export default SignupPage;
