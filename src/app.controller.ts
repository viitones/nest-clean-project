import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('store')
  store() {
    return this.prismaService.user.findMany()
  }
}
