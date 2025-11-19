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

@Controller('users')
export class UsersController {
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
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return [id];
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpadte: {}) {
    return { id, ...userUpadte };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
