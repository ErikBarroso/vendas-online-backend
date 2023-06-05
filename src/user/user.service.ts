import { Injectable } from '@nestjs/common';
import { CreateUserdto } from './dto/createUserdto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];
  async createUser(createUser: CreateUserdto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUser.password, saltOrRounds);

    //usuário do tipo da interface
    const user: User = {
      ...createUser,
      id: this.users.length + 1,
      password: passwordHash,
    };
    this.users.push(user);

    return user;
  }

  async getAllUsers() {
    return this.users;
  }
}
