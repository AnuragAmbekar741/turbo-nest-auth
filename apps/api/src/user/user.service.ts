import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, verify } from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...user } = createUserDto;
    const hashPassword = await hash(password);
    return await this.prisma.user.create({
      data: {
        password: hashPassword,
        ...user,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findOne(userId: number) {
    return await this.prisma.user.findUnique({ where: { id: userId } });
  }

  async verifyPassword(pass1: string, pass2: string) {
    const isVerified = verify(pass1, pass2);
    return isVerified;
  }
}
