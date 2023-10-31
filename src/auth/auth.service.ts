import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RegisterDTO } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: RegisterDTO) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (oldUser) throw new BadRequestException('User already exist');
    const saltRounds = 10;
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: await bcrypt.hash(dto.password, saltRounds),
      },
    });
    return user;
  }
}
