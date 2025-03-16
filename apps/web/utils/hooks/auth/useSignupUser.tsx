import { signupUser } from "@/api/auth";
import { SignupUserDto } from "@repo/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupUserDto) => signupUser(data),
    onError: (error: any) => {
      console.error("Login failed:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast(errorMessage);
    },
  });
}
