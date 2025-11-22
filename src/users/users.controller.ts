import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  /*
  GET /users
  //quire paramemter /users?role = value
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.UsersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UsersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      password: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.UsersService.create(user);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpadte: {
      name?: string;
      password?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.UsersService.update(+id, userUpadte);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UsersService.delete(+id);
  }
}
