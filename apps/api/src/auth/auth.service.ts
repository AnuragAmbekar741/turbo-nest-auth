import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists');
    return this.userService.create(createUserDto);
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByEmail(loginUserDto.email);
    if (user) {
      const verifyPass = await this.userService.verifyPassword(
        user.password,
        loginUserDto.password,
      );
      if (verifyPass) return user;
      else throw new ConflictException('Password doesnot match');
    } else throw new ConflictException('Email doesnot match');
  }
}
