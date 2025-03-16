import { loginUser } from "@/api/auth";
import { SigninUserDto } from "@repo/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLogin() {
  return useMutation({
    mutationFn: (data: SigninUserDto) => loginUser(data),
    onError: (error: any) => {
      console.error("Login failed:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast(errorMessage);
    },
  });
}
