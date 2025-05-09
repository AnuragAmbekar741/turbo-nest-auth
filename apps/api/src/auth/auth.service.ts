import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import refreshConfig from './config/refresh.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists');
    return this.userService.create(createUserDto);
  }

  async validateLocalUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');
    const verifyPassword = await this.userService.verifyPassword(
      user.password,
      password,
    );
    if (!verifyPassword) throw new ConflictException('Password doesnot match');
    return user;
  }

  async login(userId: number, name?: string) {
    const { accessToken, refreshToken } = await this.generateToken(userId);
    return {
      id: userId,
      name: name,
      accessToken,
      refreshToken,
    };
  }

  async generateToken(userId: number) {
    const payload = { sub: userId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found');
    const currentUser = { id: user.id };
    return currentUser;
  }

  async validateRefreshToken(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found');
    const currentUser = { id: user.id };
    return currentUser;
  }

  async refreshToken(userId: number, name: string) {
    const { accessToken, refreshToken } = await this.generateToken(userId);
    return {
      id: userId,
      name: name,
      accessToken,
      refreshToken,
    };
  }
}
