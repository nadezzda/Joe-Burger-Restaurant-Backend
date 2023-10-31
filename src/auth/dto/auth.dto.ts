import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
  @IsEmail()
  email: string;

  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @IsString()
  password: string;

  @IsString()
  name: string;
}
