import { IsString, MaxLength, Min, MinLength } from "class-validator";

export class LoginDto {
  @IsString()
  @MinLength(3)
  @MaxLength(26)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(26)
  password: string;
}
