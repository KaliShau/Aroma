import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/db/prisma.service'
import { EmailUserDto } from './dto/user.dto'
import { EnumUserRole } from '@prisma/client'
import { UpdateAvatarDto, UpdateProfileDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(readonly prisma: PrismaService) {}

  async create(dto: EmailUserDto) {
    return this.prisma.user.create({
      data: {
        email: dto.email,
        role: EnumUserRole.user,
        username: `user${crypto.getRandomValues(new Uint32Array(1))}`,
        avatarUrl: '/uploads/avatars/default.jpg',
        verification: {
          create: {},
        },
      },
      include: {
        verification: true,
      },
    })
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        verification: true,
      },
    })
  }

  async getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }

  async updateProfile(
    id: string,
    { firstName, lastName, phone, username }: UpdateProfileDto
  ) {
    const user = await this.getById(id)

    if (!user) throw new BadRequestException('User not found!')

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        username,
        firstName,
        lastName,
        phone,
      },
    })
  }

  async updateAvatar(id: string, { avatarUrl }: UpdateAvatarDto) {
    const user = await this.getById(id)

    if (!user) throw new BadRequestException('User not found!')

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        avatarUrl,
      },
    })
  }
}
