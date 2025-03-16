import { SigninUserDto, SignupUserDto, UserDto } from "@repo/types";
import { postData } from "../request";

export const loginUser = (data: SigninUserDto): Promise<UserDto> => {
  return postData("auth/signin", data);
};

export const signupUser = (data: SignupUserDto): Promise<UserDto> => {
  return postData("auth/signup", data);
};
