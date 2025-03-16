import { SigninUserDto, UserDto } from "@repo/types";
import { postData } from "../request";

export const loginUser = (data: SigninUserDto): Promise<UserDto> => {
  return postData("auth/signin", data);
};
