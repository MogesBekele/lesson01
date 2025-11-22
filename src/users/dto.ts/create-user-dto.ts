import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export enum Role {
  INTERN = 'INTERN',
  ADMIN = 'ADMIN',
  ENGINEER = 'ENGINEER',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string; 

  @IsEnum(Role, {
    message: 'role must be INTERN, ADMIN, or ENGINEER',
  })
  role: Role;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
