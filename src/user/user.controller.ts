import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserdto } from './dto/createUserdto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserdto) {
    return createUser;
  }
}
