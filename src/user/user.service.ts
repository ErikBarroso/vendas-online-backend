import { Injectable } from '@nestjs/common';
import { CreateUserdto } from './dto/createUserdto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  async createUser(createUser: CreateUserdto): Promise<User> {
    return{
      ...createUser,
      id: 1,
    }

  }
}
