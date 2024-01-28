import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './craete-cat.dto';

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index() {
    return 'Admin page';
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  async findAll(): Promise<any[]> {
    return ['This action returns all cats'];
  }
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get('bread')
  getBread(): string {
    return 'This action returns a bread';
  }

  @Get('docs')
  @Redirect('http://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'http://docs.nestjs.com/v5/' };
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
