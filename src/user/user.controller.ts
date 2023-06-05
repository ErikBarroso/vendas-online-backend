import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserdto } from './dto/createUserdto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserdto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
