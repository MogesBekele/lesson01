import { Injectable } from '@nestjs/common';

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
    return user;
  }
  create(user: {
    name: string;
    email: string;
    password: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      password?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updatedUser,
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
