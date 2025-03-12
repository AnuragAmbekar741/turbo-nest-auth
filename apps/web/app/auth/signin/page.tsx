import Link from "next/link";
import React from "react";
import { SigninForm } from "./SigninForm";

const SigninPage = () => {
  return (
    <div className="p-8 rounded-lg w-96 flex flex-col justify-center items-center gap-8">
      <h3 className="text-2xl font-medium">Sign in</h3>
      <SigninForm />
      <Link className="text-sm font-normal text-gray-600" href="signup">
        Create an account? Sign up
      </Link>
    </div>
  );
};

export default SigninPage;
