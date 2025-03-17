export interface UserDto {
  name: string;
  email: string;
  password: string;
  id: string;
  accessToken: string;
}

export interface SignupUserDto {
  name: string;
  email: string;
  password: string;
}

export interface SigninUserDto {
  email: string;
  password: string;
}
