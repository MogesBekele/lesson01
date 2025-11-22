import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto.ts/create-user-dto';
import { UpdateUserDto } from './dto.ts/update-user-dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      password: 'secretPassword',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Doe',
      password: 'secretPassword',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Bob Doe',
      password: 'secretPassword',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Alice Doe',
      password: 'secretPassword',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Tom Doe',
      password: 'secretPassword',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('user not found')
    return user;
  }
  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
